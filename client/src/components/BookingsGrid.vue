<template lang="html">
  <div id="bookingGrid">
    <div class="booking" v-for="booking in bookings">
      <h2>Name: {{ booking.name }}</h2>
      <p>Email Address: {{ booking.email }}</p>
      <p>Checked In: {{ getCheckInStatus(booking.checked_in_status) }}</p>
      <!-- check out = "function" -->

      <button v-on:click="handleDelete(booking._id)">Delete Booking</button>
      <!-- <button v-on:click="handleUpdate(booking._id, booking.$set)">Update Booking</button> -->

    </div>
  </div>
</template>

<script>
import { eventBus } from '../main';
import BookingService from '../services/BookingService';

export default {
  name: "bookings-grid",
  props: ["bookings"],
  methods: {
    handleDelete(id){
      BookingService.deleteBooking(id)
      .then(response => eventBus.$emit('booking-deleted', id));
    },
    handleUpdate(id){
      // BookingService.updateBooking(id)
      // .then(response => eventBus.$emit('booking-updated', id));
      // trigger a bus which will send to app
    },
    getCheckInStatus(status){
      if (status) {
        return "Yes"
      } else {
        return "No"
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
