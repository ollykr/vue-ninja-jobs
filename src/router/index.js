import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Jobs from "../views/Jobs.vue";

// Array of different routes, each is an object with properties
const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{
		path: "/jobs",
		name: "Jobs",
		component: Jobs,
	},
];
// This instance creates a router for our app
// "createRouter" functio is exported for the Vue Router package (at the top of the file)
const router = createRouter({
	// WebHistory API allows next/previous routes
	history: createWebHistory(process.env.BASE_URL),
	// Router itself
	routes,
});

export default router;
