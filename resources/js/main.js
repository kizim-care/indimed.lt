document.addEventListener('alpine:init', () => {
    Alpine.data('mainForm', (data) => ({
        fields: {},
        conditionalFields: {},
        hasErrors: false,
        errorMessages: [],
        loading: false,
        success: false,
        post() {
            const emptyValidationFields = ['patientAge', 'description', 'canArrive', 'name', 'email', 'phone']

            for(let i = 0; i < emptyValidationFields.length; i++) {
                if (this.fields[emptyValidationFields[i]].value === '') {
                    this.fields[emptyValidationFields[i]].error = true

                    this.hasErrors = true

                    this.errorMessages.push(this.fields[emptyValidationFields[i]].errorMessage)
                }
            }

            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.fields.email.value)) {
                this.fields.email.error = true

                this.hasErrors = true

                if (!this.errorMessages.includes(this.fields.email.errorMessage)) {
                    this.errorMessages.push(this.fields.email.errorMessage)
                }
            }

            if (!/^(\+3706|86|003706|03706|3706|6|06)\d{7}$/.test(this.fields.phone.value)) {
                this.fields.phone.error = true

                this.hasErrors = true

                if (!this.errorMessages.includes(this.fields.phone.errorMessage)) {
                    this.errorMessages.push(this.fields.phone.errorMessage)
                }
            }

            if (this.hasErrors) {
                return
            }

            this.loading = true

            let url = 'https_colon__slash__slash_templid_dot_com_slash_webhooks_slash_31_slash_e31097ffb1abb98086698bd32d340cf0_slash_indimedlt';

            url = url.replace(/_colon_/g, ':').replace(/_slash_/g, '/');

            fetch(url.replace(/_dot_/g, '.'), {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    patientAge: this.fields.patientAge.value,
                    description: this.fields.description.value,
                    canArrive: this.fields.canArrive.value,
                    preferedLocation: this.fields.preferedLocation.value,
                    name: this.fields.name.value,
                    email: this.fields.email.value,
                    phone: this.fields.phone.value,
                    templid: this.fields.templid.value === '' ? '7c619ed495dfeeac328da2f7ed3f1069' : this.fields.templid.value,
                })
            }).then(response => {
                this.loading = false

                this.success = true
            }).catch(error => {
                this.loading = false

                this.hasErrors = true

                this.errorMessages.push('Įvyko klaida, perkraukite puslapį ir bandykite dar kartą')
            })

            Object.keys(this.fields).forEach((key) => {
                this.fields[key].value = ''
            })
        },
        revalidateField(name) {
            this.fields[name].error = false

            this.hasErrors = false

            this.errorMessages = []
        },
        show(name) {
            if (!this.conditionalFields.hasOwnProperty(name)) {
                return false
            }

            for(let i = 0; i < this.conditionalFields[name].length; i++) {
                if (this.fields[this.conditionalFields[name][i].field.data.name].value !== this.conditionalFields[name][i].value) {
                    return false
                }
            }

            return true;
        },
        init() {
            data.forEach((field) => {
                this.fields[field.data.name] = {
                    value: field.data.value ?? '',
                    error: false,
                    errorMessage: field.data.errorMessage,
                }

                if (field.data.hasOwnProperty('conditions')) {
                    this.conditionalFields[field.data.name] = field.data.conditions
                }
            })

            this.fields.templid = {value: ''};
        }
    }))
})
