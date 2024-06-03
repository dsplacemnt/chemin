import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const defaultOrganization = await prisma.organization.create({ data: { name: 'Prototype' } });
  const defaultRole = await prisma.role.create({ data: { name: 'Admin', organizationId: defaultOrganization.id } });
  const defaultUser = await prisma.user.create({
    data: {
      email: 'dsplacemnt@gmail.com',
      name: 'Thainan Feistel',
      password: 'thainan',
      organizationId: defaultOrganization.id,
      roles: {
        connect: { id: defaultRole.id },
      },
    },
  });
  console.log({ defaultOrganization, defaultRole, defaultUser });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
