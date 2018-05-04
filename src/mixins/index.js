import { Chart } from 'frappe-charts'

export default {
    props: {
        id: {
            required: true,
            type: String,
            default: null
        },

        dataSet: {
            required: true,
            type: Array,
            default: []
        },

        title: {
            required: false,
            type: String
        },

        height: {
            required: false,
            type: Number,
            default: 300
        },

        type: {
            required: false,
            type: String,
            default: 'bar'
        },

        colors: {
            required: false,
            type: Array,
            default: [
                'purple', '#ffa3ef', 'light-blue'
            ]
        },

        tooltipOptions: {
            required: false,
            type: Object,
            default: {
                formatTooltipX: d => (d + '').toUpperCase(),
                formatTooltipY: d => d + ' pts',
            }
        },

        isNavigable: {
            required: false,
            type: Boolean,
            default: false
        },

        valuesOverPoints: {
            required: false,
            type: Boolean,
            default: false
        },

        barOptions: {
            required: false,
            type: Object,
            default: {
                spaceRatio: 0.5,
                stacked: 0
            }
        },

        lineOptions: {
            required: true,
            type: Object,
            default: {
                dotSize: 4,
                hideLine: 0,
                hideDots: 0,
                heatline: 0,
                regionFill: 0
            }
        },

        axisOptions: {
            required: false,
            type: Object,
            default: {
                yAxisMode: '',
                xAxisMode: '',
                xIsSeries: 0
            }
        },

        maxLegendPoints: {
            required: false,
            type: Number,
            default: 20
        },

        maxSlices: {
            required: false,
            type: Number,
            default: 20
        },

        barOptions: {
            required: false,
            type: Object,
            default: {
                height: 20,
                depth: 2
            }
        },

        discreteDomains: {
            required: false,
            type: Boolean,
            default: true
        }
    },

    mounted () {
        this.startChart()
    },

    methods: {
        startChart () {
            

            Chart.export()
        }
    }
}

