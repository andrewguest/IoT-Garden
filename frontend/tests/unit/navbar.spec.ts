import { shallowMount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from "vue-router";
import { routes } from "@/router/index";
import Navbar from "@/components/Navbar.vue"
import App from "@/App.vue";

describe('Testing Navbar component', () => {
  it('Make sure the Navbar loads', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes
    })
    router.push("/");
    await router.isReady()
    
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router]
      }
    })

    // List out all of the links inside the 'router' object
    router.options.routes.forEach(route => {
      console.log(`Route name: ${String(route.name)}`);
      console.log(`Route path: ${route.path}`);
    })

    // Test that the 'Navbar' component exists on the page
    expect(wrapper.findComponent(Navbar).exists()).toBe(true);
  })
})
