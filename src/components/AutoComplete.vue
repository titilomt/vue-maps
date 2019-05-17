<template>
  <div>
    <section>
    <label>
      AutoComplete
      <GmapAutocomplete @place_changed="setPlace">
      </GmapAutocomplete>
    </label>
    </section>
    <section style="display: -webkit-box;">
    <div style="width: 70%; height: 500px">
      <GmapMap style="width: 100%; height: 100%;" :zoom="14" :center.sync="center" @center_changed="updateCenter" @idle="sync" @click="onClick">
        <GmapMarker 
          v-if="searchLocation"
          title="Searched location"
          :draggable=true
          :position="searchLocation"
          @click="test"
        />
      </GmapMap>
    </div>
    
    <div style="width: 30%; height: 500px">
      <h1>Hola</h1>  
    </div>
    </section>
  </div>
</template>

<script>

export default {
    /* eslint-disable */
    name: 'AutoComplete',
  data() {
    return {
      searchLocation: null,
      markers: [],
      reportedMapCenter: {
        lat: -19.9068015,
        lng: -43.9547548
      },
      place: null,
      center: {
        lat: -19.9068015,
        lng: -43.9547548
      }
    }
  },
  description: 'Autocomplete Example (#164)',
  methods: {
    setDescription(description) {
      this.description = description;
    },
    setPlace(place) {
      this.place = place
      this.searchLocation = {
        lat: this.place.geometry.location.lat(),
        lng: this.place.geometry.location.lng(),
      }
    },
    updateCenter(latLng) {
      this.reportedMapCenter = {
        lat: latLng.lat(),
        lng: latLng.lng(),
      }
    },
    test(place) {
      console.log(this.reportedMapCenter);
    },
    onClick ({ latLng }) {
			this.searchLocation = latLng
			this.updateCenter(latLng)
		},
    sync () {
      this.center = this.reportedMapCenter
    }
  }
}
</script>
