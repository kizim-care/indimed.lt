const _const = require('./_const');

module.exports = {
    patientAge: {
        type: "select",
        data: {
            name: "patientAge",
            label: "Paciento amžiaus grupė",
            placeholder: "Pasirinkite amžiaus grupę",
            options: [
                {
                    value: _const.patientUnder1,
                    text: _const.patientUnder1,
                },
                {
                    value: _const.patientUnder7,
                    text: _const.patientUnder7,
                },
                {
                    value: _const.patientUnder18,
                    text: _const.patientUnder18,
                },
                {
                    value: _const.patientUnder60,
                    text: _const.patientUnder60,
                },
                {
                    value: _const.patientOver60,
                    text: _const.patientOver60,
                }
            ],
            icon: '<svg class="h-5 w-5" stroke-width="2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-slot="icon"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"></path></svg>',
        },
    },
    description: {
        type: 'textarea',
        data: {
            name: 'description',
            label: 'Trumpas Jūsų atvejo aprašymas',
            placeholder: 'Trumpai aprašykite savo atvejį',
        },
    },
    canArrive: {
        type: 'select',
        data: {
            name: 'canArrive',
            label: 'Ar galite atvykti pas specialistą?',
            placeholder: 'Pasirinkite tinkamą variantą',
            options: [
                {
                    value: _const.canArriveYes,
                    text: _const.canArriveYes,
                },
                {
                    value: _const.canArriveNo,
                    text: _const.canArriveNo,
                },
                {
                    value: _const.canArriveUnknown,
                    text: _const.canArriveUnknown,
                },
            ],
            icon: '<svg class="h-5 w-5" stroke-width="2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-slot="icon"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path></svg>',
        },
    },
    name: {
        type: 'text',
        data: {
            name: 'name',
            type: 'text',
            label: 'Jūsų vardas',
            placeholder: 'Įveskite savo vardą',
            icon: '<svg class="h-5 w-5" stroke-width="2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-slot="icon"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path></svg>',
        },
    },
    email: {
        type: 'text',
        data: {
            name: 'email',
            type: 'email',
            label: 'Jūsų el. pašto adresas',
            placeholder: 'Įveskite savo el. pašto adresą',
            icon: '<svg class="h-5 w-5" stroke-width="2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-slot="icon"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path></svg>',
        },
    },
    phone: {
        type: 'text',
        data: {
            name: 'phone',
            type: 'tel',
            label: 'Jūsų telefono numeris',
            placeholder: 'Įveskite savo telefono numerį',
            icon: '<svg class="h-5 w-5" stroke-width="2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-slot="icon"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"></path></svg>',
        },
    },
}
