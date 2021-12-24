import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Jobs from "../views/jobs/Jobs.vue";
import JobDetails from "../views/jobs/JobDetails.vue";

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
	{
		// it can be "slug" instead of "id"
		path: "/jobs/:id",
		name: "JobDetails",
		component: JobDetails,
		// to accept param from Jobs.vue as a prop in JobDetails.vue, we can accept any params in this route
		props: true,
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
