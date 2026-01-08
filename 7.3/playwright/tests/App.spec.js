import { test, expect } from "@playwright/test";
const { email, password, invalidEmail } = require("../user.js");

test("testValid", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.locator(".styles_button__MYGdj").click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(email);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill(password);
  await page.locator(".styles_button__MYGdj").click();

  await page.locator('div.SmartCaptcha-Overlay_visible').count() > 0;
  await page.locator('text=Press in the following order').count() > 0;
});


test("testInvalid", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.locator(".styles_button__MYGdj").click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(invalidEmail);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill(password);
  await page.locator(".styles_button__MYGdj").click();
  
  await expect(page.getByText("Неверный email")).toBeVisible();
});