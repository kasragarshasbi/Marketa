import prisma from '../lib/prisma';

const posts = [
  {
    title: 'title 1',
    content: 'content 1'
  },
  {
    title: 'title 2',
    content: 'content 2'
  },
  {
    title: 'title 3',
    content: 'content 3'
  }
];

async function seedData() {
  const count = await prisma.post.count();

  if (count === 0) {
    await prisma.post.createMany({ data: posts });
  }
}

seedData().finally(async () => await prisma.$disconnect());
