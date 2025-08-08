'use server';
import fs from 'node:fs';
import fsPromise from 'node:fs/promises';

export async function saveUserAction(formData) {
  console.debug("server action executed")
  const data = fs.readFileSync('dummy-db.json', 'utf-8');
  const instructors = JSON.parse(data);
  const newInstructor = {
    id: new Date().getTime().toString(),
    name: formData.get('name'),
    title: formData.get('title'),
  };

  instructors.push(newInstructor);
  fs.writeFileSync('dummy-db.json', JSON.stringify(instructors));
}

export async function fetchDummyUserData() {
  const data = await fsPromise.readFile('dummy-db.json', 'utf-8');
  return JSON.parse(data);
}