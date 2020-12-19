import { shallowMount } from '@vue/test-utils'
import AddDevice from "@/components/modals/NewDevice.vue";


describe('AddDevice modal', () => {
  it('successfully adds a new device', async () => {
    const wrapper = shallowMount(AddDevice);

    // Random 'device type' setup
    const supportedDeviceTypes: string[] = new Array("Arduino", "Raspberry Pi", "esp8266", "esp32", "other")
    const randomDeviceType = supportedDeviceTypes[Math.floor(Math.random() * supportedDeviceTypes.length)];

    const deviceDescription = "A super descriptive device description!";

    await wrapper.find("#new-device-name").setValue("Test Device 1");
    await wrapper.find("#new-device-type").setValue(randomDeviceType);
    await wrapper.find("#new-device-description").setValue(deviceDescription);

    await wrapper.find("#new-device-submit").trigger("submit.prevent");
  })
})
