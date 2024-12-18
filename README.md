### Price Platter
Your personal price saving tool

### Process

1. Initialize the project
    - npx create-next-app@latest app_name

2. Install & configure shadCN
    - shadcn docs

3. Folder structure & Routes

4. Create a design, get some inspiration

5. Start making the UI first

6. Backend
    1. Install prisma 
        - `pnpm i prisma --save-dev`
    2. Initialize prisma with splite 
        - `npx prisma init --datasource-provider sqlite`

    3. Prisma folder will be created & env variable for database

    4. Create your Database model

    5. Generate prisma client 
        - `pnpm install @prisma/client`
        - (or/ notsure) migration - `npx prisma migrate dev --name init`

    6. Create db.ts file in lib folder
        - paste prisma client code - so that you dont have to import it again & again

    7. To view your database / studio
        - `pnpm exec prisma studio`

    8. Perform the basic crud operations
    
    
7. Server Actions

8. Seed script
    - pnpm exec prisma db seed


<!-- TODO: 

1. Add veg & non-veg Symbol -> food card    ✅

2. Food Card
    - swiggy & zomato should pop up     ✅
    - redirect to -> swiggy / zomato    ✅
    - remove ratings                        

3. Remove button Login & SignUp         ✅
    - After user is authenticated
    - add Logout button

4. When food not found              ✅
    - display food not found, go back to homepage

5. Setup Seed file          ✅ -->