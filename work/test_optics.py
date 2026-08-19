from pathlib import Path
from playwright.sync_api import sync_playwright


ROOT = Path(__file__).resolve().parents[1] / "outputs"
URL = ROOT.joinpath("index.html").as_uri()
SCREENSHOT_DIR = Path(__file__).resolve().parent


with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900}, device_scale_factor=1)
    console_errors = []
    page.on("console", lambda message: console_errors.append(message.text) if message.type == "error" else None)

    page.goto(URL, wait_until="networkidle")
    page.screenshot(path=str(SCREENSHOT_DIR / "optics-stage-1.png"), full_page=False)

    assert page.locator("#see-state").is_visible()
    assert page.get_by_role("heading", name="THE PUBLIC IMAGE").is_visible()
    assert page.get_by_role("button", name="EXPAND THE FRAME →").is_visible()

    page.get_by_role("button", name="EXPAND THE FRAME →").click()
    page.wait_for_timeout(1400)
    page.screenshot(path=str(SCREENSHOT_DIR / "optics-stage-2.png"), full_page=False)

    assert "is-expanded" in (page.locator("body").get_attribute("class") or "")
    assert page.locator(".scene-image").is_visible()
    assert page.locator(".original-boundary").is_visible()
    assert page.get_by_text("PEOPLE REMOVED FROM THE PUBLIC IMAGE").is_visible()
    assert page.get_by_text("THE PATTERN").is_visible()

    page.locator("#understand-state").scroll_into_view_if_needed()
    page.wait_for_timeout(400)
    page.screenshot(path=str(SCREENSHOT_DIR / "optics-stage-3.png"), full_page=False)
    assert page.get_by_role("heading", name="VISIBILITY = REALITY").is_visible()
    assert page.get_by_text("OPTICS OVER").is_visible()
    assert page.get_by_text("When the frame becomes the story, what falls outside it becomes easier to ignore.").is_visible()

    print({
        "url": URL,
        "stage_1": True,
        "stage_2": True,
        "stage_3": True,
        "console_errors": console_errors,
    })
    browser.close()
