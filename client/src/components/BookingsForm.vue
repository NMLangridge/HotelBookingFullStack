<template lang="html">
  <form id="bookings-form" v-on:submit="handleSubmit">
    <h2>Add a Booking</h2>
    <div class="formWrap">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required />
    </div>
    <div class="formWrap">
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email" required />
    </div>
    <div class="formWrap">
      <label for="checked_in_status">Checked In Status:</label>
      <input type="checkbox" id="checked_in_status" v-model="checked_in_status" />
    </div>

    <input type="submit" value="Save" id="save"/>
  </form>
</template>

<script>
import { eventBus } from '../main';
import BookingService from '../services/BookingService';

export default {
  name: "bookings-form",
  data(){
    return {
      name: "",
      email: "",
      checked_in_status: false
    }
  },
  methods: {
    handleSubmit(event){
      event.preventDefault();

      const payload = {
        name: this.name,
        email: this.email,
        checked_in_status: this.checked_in_status
      };

      BookingService.postBooking(payload)
      .then(booking => {
        eventBus.$emit('booking-added', booking);
      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
