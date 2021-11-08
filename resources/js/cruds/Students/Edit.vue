<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">edit</i>
              </div>
              <h4 class="card-title">Edit Student</h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                   <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.name,
                      'is-focused': activeField == 'name'
                    }"
                  >
                    <label class="bmd-label-floating required">Name</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.name"
                      @input="updateName"
                      @focus="focusField('name')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.dob,
                      'is-focused': activeField == 'dob'
                    }"
                  >
                    <label class="bmd-label-floating required">Date of Birth</label>
                    <input
                      class="form-control"
                      type="date"
                      :value="entry.dob"
                      @input="updateDob"
                      @focus="focusField('dob')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.admission_number,
                      'is-focused': activeField == 'admission_number'
                    }"
                  >
                    <label class="bmd-label-floating required">Admission Number</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.admission_number"
                      @input="updateAdmission_number"
                      @focus="focusField('admission_number')"
                      @blur="clearFocus"
                    />
                  </div>
                </div>
                </div>
            </div>
            <div class="card-footer">
              <vue-button-spinner
                class="btn-primary"
                :status="status"
                :isLoading="loading"
                :disabled="loading"
              >
                Save
              </vue-button-spinner>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Attachment from '@components/Attachments/Attachment'

export default {
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('StudentsSingle', ['entry', 'loading'])
  },
  beforeDestroy() {
    this.resetState()
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.resetState()
        this.fetchEditData(this.$route.params.id)
      }
    }
  },
  methods: {
    ...mapActions('StudentsSingle', [
      'fetchEditData',
      'updateData',
      'resetState',
      'setName',
      'setDob',
      'setAdmission_number',
    ]),
    updateName(e) {
      this.setName(e.target.value)
    },
    updateAdmission_number(e) {
      this.setAdmission_number(e.target.value)
    },
    updateDob(e) {
      this.setDob(e.target.value)
    },
    submitForm() {
      this.updateData()
        .then(() => {
          this.$router.push({ name: 'students.index' })
          this.$eventHub.$emit('update-success')
        })
        .catch(error => {
          this.status = 'failed'
          _.delay(() => {
            this.status = ''
          }, 3000)
        })
    },
    focusField(name) {
      this.activeField = name
    },
    clearFocus() {
      this.activeField = ''
    }
  }
}
</script>
