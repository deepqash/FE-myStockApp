import embed, { Mode, VisualizationSpec } from 'vega-embed';
import { flatten } from 'lodash';

export interface Point2D {
    x: number;
    y: number;
}
export interface Point3D {
    x: number;
    y: number;
    series: string;
}

export interface VisOptions {
    width?: number;
    height?: number;
    xLabel?: string;
    yLabel?: string;
    xType?: 'quantitative' | 'ordinal' | 'nominal';
    yType?: 'quantitative' | 'ordinal' | 'nominal';
    fontSize?: number;
    xAxisDomain?: [number, number];
    yAxisDomain?: [number, number];
    zoomToFit?: boolean;
}

export async function areaChart(
    container: HTMLElement,
    data: {values: Point3D[]}, //{ values: Point2D[][], series: string[] }
    opts: VisOptions = {},
): Promise<void> {

    // const values = flatten(data.values.map(
    //     (vals) => vals.map((v, idx) => ({ ...v, series: data.series[idx] }))
    // ));

    const options: VisOptions = {
        xLabel: 'x',
        yLabel: 'y',
        xType: 'quantitative',
        yType: 'quantitative',
        zoomToFit: true,
        fontSize: 15,
        ...opts,
    };
    const plot_config = {
        width: options.width || container.clientWidth,
        height: options.height || container.clientHeight,
        padding: 0,
        autosize: {
            type: 'fit',
            contains: 'padding',
            resize: true,
        },
        config: {
            axis: {
                labelFontSize: options.fontSize,
                // titleFontSize: options.fontSize,
            },
            text: { fontSize: options.fontSize },
            legend: {
                labelFontSize: options.fontSize,
                titleFontSize: options.fontSize,
            }
        }
    }

    const plot1 = {
        ...plot_config,
        
        // Render the main line chart
        mark: {
            type: 'area',
            clip: true,
        },
        encoding: {
            x: {
                field: 'x',
                type: options.xType,
                title: options.xLabel,
                scale: { domain: { selection: "brush" } },
                axis: { title: "" }
            },
            y: {
                field: 'y',
                type: options.yType,
                title: options.yLabel,
                // scale: { zero: false },
            },
            color: {
                field: 'series',
                type: 'nominal',
                legend: { values: data.values['series'], orient: 'top', offset: 0 }
            },
            opacity: { "value": 0.8 }
        },        
        }

    const plot2 = {
        ...plot_config,
        // Render the main line chart
        mark: {
            type: 'area',
            clip: true,
        },
        selection: {
            brush: { type: "interval", encodings: ["x"] }
        },
        encoding: {
            x: {
                field: 'x',
                type: options.xType,
                title: options.xLabel,
            },
            y: {
                field: 'y',
                type: options.yType,
                title: options.yLabel,
                // scale: { zero: false },
            },
            color: {
                field: 'series',
                type: 'nominal',
                legend: { values: data.values['series'], orient: 'top', offset: 0 }
            },
            opacity: { "value": 0.6 }
        },      
    }            
    const spec: VisualizationSpec = {     
        data: data,
        vconcat:[plot1, plot2]
        
    };

    const embedOpts = {
        actions: false,
        mode: 'vega-lite' as Mode,
        defaultStyle: false,
    };

    await embed(container, spec, embedOpts);
}


export async function barChart(
    container: HTMLElement,
    data: { values: Point3D[] }, //{ values: Point2D[][], series: string[] }
    opts: VisOptions = {},
): Promise<void> {

    // const values = flatten(data.values.map(
    //     (vals) => vals.map((v, idx) => ({ ...v, series: data.series[idx] }))
    // ));

    const options: VisOptions = {
        xLabel: 'x',
        yLabel: 'y',
        xType: 'quantitative',
        yType: 'quantitative',
        zoomToFit: true,
        fontSize: 15,
        ...opts,
    };
    const plot_config = {
        width: options.width || container.clientWidth,
        height: options.height || container.clientHeight,
        padding: 0,
        autosize: {
            type: 'fit',
            contains: 'padding',
            resize: true,
        },
        config: {
            axis: {
                labelFontSize: options.fontSize,
                // titleFontSize: options.fontSize,
            },
            text: { fontSize: options.fontSize },
            legend: {
                labelFontSize: options.fontSize,
                titleFontSize: options.fontSize,
            }
        }
    }

    const plot1 = {
        ...plot_config,

        // Render the main line chart
        mark: {
            type: 'bar',
        },
        encoding: {
            x: {
                field: 'x',
                bin:true,
                type: options.xType,
                title: options.xLabel,
                axis: { title: "" }
            },
            y: {
                field: "y",
                type: options.yType,
                title: options.yLabel,
                // scale: { zero: false },
            },
            color: {
                field: 'series',
                type: 'nominal',
                legend: { values: data.values['series'], orient: 'top', offset: 0 }
            },
            opacity: { "value": 0.8 }
        },
    }

    const plot2 = {
        ...plot_config,

        // Render the main line chart
        mark: {
            type: 'rule',
        },
        encoding: {
           
            y: {
                field: 'y',
                aggregate:"mean",
                type: options.yType,
                title: options.yLabel,
                // scale: { zero: false },
            },
            color: {
                field: 'series',
                type: 'nominal',
                legend: { values: data.values['series'], orient: 'top', offset: 0 }
            },
            opacity: { "value": 0.8 }
        },
    }

    const spec: VisualizationSpec = {
        data: data,
        layer: [plot1, plot2]

    };

    const embedOpts = {
        actions: false,
        mode: 'vega-lite' as Mode,
        defaultStyle: false,
    };

    await embed(container, spec, embedOpts);
}