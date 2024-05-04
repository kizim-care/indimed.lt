document.addEventListener('alpine:init', () => {
    Alpine.data('mainForm', (data) => ({
        fields: {},
        conditionalFields: {},
        post() {
            console.log('post', this.fields);
        },
        show(name) {
            if (!this.conditionalFields.hasOwnProperty(name)) {
                return false;
            }

            for(let i = 0; i < this.conditionalFields[name].length; i++) {
                if (this.fields[this.conditionalFields[name][i].field.data.name] !== this.conditionalFields[name][i].value) {
                    return false;
                }
            }

            return true;
        },
        init() {
            data.forEach((field) => {
                this.fields[field.data.name] = field.data.value ?? '';

                if (field.data.hasOwnProperty('conditions')) {
                    this.conditionalFields[field.data.name] = field.data.conditions;
                }
            });
            console.log('init', this.conditionalFields);
        }
    }));
})
