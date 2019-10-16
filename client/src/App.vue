<template lang="html">
  <div id="app">
    <bookings-form />
    <bookings-grid :bookings="bookings" />
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm';
import BookingsGrid from './components/BookingsGrid';
import { eventBus } from './main';
import BookingService from './services/BookingService';

export default {
  name: 'app',
  data () {
    return {
      bookings: []
    }
  },
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid
  },
  mounted(){
    this.fetchData();

    eventBus.$on('booking-added', booking => this.bookings.push(booking));

    eventBus.$on('booking-deleted', id => {
      const index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings.splice(index, 1);
    })

    // bus will arrive for update
    // create a newData which is a mutation of old data and new info coming in
    // call your BookingService function that updates
    // find the specific one in your this.bookings by index and change that

  },
  methods: {
    fetchData(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
