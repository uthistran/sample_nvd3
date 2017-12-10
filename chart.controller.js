angular.module('ChartApp', ['nvd3'])

    .controller('ChartController', function ($scope, $timeout) {
        var vm = $scope;
        vm.Value = "Hide Value";
        vm.updateContent = function () {
           for(var i=0; i<vm.data[0].values.length;i++ ){
            vm.data[0].values[i].value = -(Math.floor((Math.random() * 100) + 1));
            vm.data[1].values[i].value=  Math.floor((Math.random() * 100) + 1);
           }
        }

        vm.updateValue = function() {
            if(vm.Value == "Show Value"){
                vm.options.chart.showValues = true;
                vm.Value = "Hide Value";
            } else {
                vm.options.chart.showValues = false;
                vm.Value = "Show Value";
            }
        }

        vm.options = {
            chart: {
                type: 'multiBarHorizontalChart',
                height: 450,
                x: function (d) { return d.label; },
                y: function (d) { return d.value; },
                showControls: true,
                showValues: true,
                duration: 500,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Values',
                    tickFormat: function (d) {
                        return d3.format(',.2f')(d);
                    }
                }
            }
        };
        vm.data = [
            {
                "key": "Series1",
                "color": "#DE4C2D",
                "values": [
                    {
                        "label": "Group A",
                        "value": -1
                    },
                    {
                        "label": "Group B",
                        "value": -8
                    },
                    {
                        "label": "Group C",
                        "value": -7
                    },
                    {
                        "label": "Group D",
                        "value": -2
                    },
                    {
                        "label": "Group E",
                        "value": -5
                    },
                    {
                        "label": "Group F",
                        "value": -3
                    },
                    {
                        "label": "Group G",
                        "value": -9
                    },
                    {
                        "label": "Group H",
                        "value": -7
                    },
                    {
                        "label": "Group I",
                        "value": -2
                    }
                ]
            },
            {
                "key": "Series2",
                "color": "#1A237E",
                "values": [
                    {
                        "label": "Group A",
                        "value": 25
                    },
                    {
                        "label": "Group B",
                        "value": 16
                    },
                    {
                        "label": "Group C",
                        "value": 18
                    },
                    {
                        "label": "Group D",
                        "value": 8
                    },
                    {
                        "label": "Group E",
                        "value": 7
                    },
                    {
                        "label": "Group F",
                        "value": 5
                    },
                    {
                        "label": "Group G",
                        "value": 3
                    },
                    {
                        "label": "Group H",
                        "value": 20
                    },
                    {
                        "label": "Group I",
                        "value": 50
                    }
                ]
            }
        ]

    });

