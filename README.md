# Dashboard App

A responsive **Dashboard application** built with **Next.js (JavaScript)**, **Tailwind CSS**, and **Framer Motion**.  
This app fetches user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users), displays a searchable and paginated list of users, and provides a detailed page for each user.

---

## **Features**

- **User List Page**
  - Displays **Name, Email, Phone, Company**
  - Fully **responsive** table for mobile and desktop
  - **Search** users by name or email
  - **Pagination** (5 users per page)

- **User Details Page**
  - Click any **table row** to view full user details
  - Includes **contact info, company, and address**
  - **Back link** to return to the list

- **Animations**
  - Smooth **row fade-in** and **slide-up** animations with **Framer Motion**
  - Optional subtle **hover scale effect** on rows

- **Optional 3D Element**
  - A **3D floating torus** at the top using **React Three Fiber** (Three.js)
  - Enhances the visual appearance of the dashboard

- **Responsive Design**
  - Fully usable on mobile, tablet, and desktop

---

## **Tech Stack**

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Three Fiber / Drei](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) (for optional 3D elements)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) for fake user data

---

## **Getting Started**

### **1. Clone the repository**

```bash
git clone https://github.com/<your-username>/dashboard-app.git
cd dashboard-app
