document.addEventListener('alpine:init', () => {
    Alpine.data('mainForm', (data) => ({
        fields: {},
        conditionalFields: {},
        hasErrors: false,
        errorMessages: [],
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

            console.log('Submit form');
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
        }
    }))
})
