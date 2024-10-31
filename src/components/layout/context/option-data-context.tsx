import React from 'react'
import { ChartOptions, ChartTypeRegistry } from 'chart.js'

interface AuxProps {
    children: React.ReactNode
}

const initialOptions: ChartOptions<keyof ChartTypeRegistry> = {
    responsive: true,
    maintainAspectRatio: true,
    indexAxis: "x" as const,
    scales: {
        x: {
            stacked: false,
        },
        y: {
            stacked: false
        }
    },
    plugins: {
        legend: {
            position: "top" as const
        },
        title: {
            display: true,
            text: "Chart.js Chart"
        }
    }
}

interface OptionAction {
    type: "vertical" | "horizontal" | "stacked" | "custom",
    modifiedOptions?: ChartOptions<keyof ChartTypeRegistry>
}

function optionReducer(
    options:ChartOptions<keyof ChartTypeRegistry>, 
    action: OptionAction
): ChartOptions<keyof ChartTypeRegistry> {
    switch (action.type) {
        case "vertical": {
            const newOptions = _.cloneDeep(options) as ChartOptions<"bar">
            if(
                newOptions.scales && 
                newOptions.scales.x && 
                newOptions.scales.x.stacked && 
                newOptions.scales.y && 
                newOptions.scales.y.stacked
            ){
                newOptions.scales.x.stacked = false;
                newOptions.scales.y.stacked = false;
            }
            if(newOptions.indexAxis = "y") {
                newOptions.indexAxis = 'x'
            }
            return newOptions
        }
        case "horizontal": {
            const newOptions = _.cloneDeep(options) as ChartOptions<"bar">
            if(
                newOptions.scales && 
                newOptions.scales.x && 
                newOptions.scales.x.stacked && 
                newOptions.scales.y && 
                newOptions.scales.y.stacked
            ){
                newOptions.scales.x.stacked = false;
                newOptions.scales.y.stacked = false;
            }
            if(newOptions.indexAxis = "x") {
                newOptions.indexAxis = 'y'
            }
            return newOptions
        }
        case "stacked": {
            const newOptions = _.cloneDeep(options) as ChartOptions<"bar">
            if(
                newOptions.scales && 
                newOptions.scales.x && 
                newOptions.scales.x.stacked && 
                newOptions.scales.y && 
                newOptions.scales.y.stacked
            ){
                newOptions.scales.x.stacked = true;
                newOptions.scales.y.stacked = true;
            }
            return newOptions
        }
    }
        
}

export const optionDataContext: React.FC<AuxProps> = ({children}) => {


    return (
        <div>option-data-context</div>
    )
}
