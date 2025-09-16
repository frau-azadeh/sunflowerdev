import fs from "fs";
import path from "path";

const contactsFilePath = path.join(process.cwd(), "data", "contacts.json");

export async function POST(req) {
  const { name, phone, message } = await req.json();

  if (!name || !phone || !message) {
    return new Response(JSON.stringify({ error: "همه فیلدها الزامی هستند" }), {
      status: 400,
    });
  }

  // خواندن داده‌ها از فایل JSON
  const fileData = fs.readFileSync(contactsFilePath, "utf-8");
  const contacts = JSON.parse(fileData);

  // اضافه کردن تماس جدید
  const newContact = { id: contacts.length + 1, name, phone, message };
  contacts.push(newContact);

  // نوشتن داده‌ها در فایل JSON
  fs.writeFileSync(contactsFilePath, JSON.stringify(contacts, null, 2));

  return new Response(JSON.stringify({ message: "پیام با موفقیت ذخیره شد" }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
