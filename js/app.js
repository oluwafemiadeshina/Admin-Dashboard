//SideBar Toggle
let sidebarOpen = false;

const sideBar = document.querySelector('#sidebar');

const openSideBar = ()=>{
    if(!sidebarOpen){
        sideBar.classList.add('sidebar-responsive');
        sidebarOpen = true;
    }
}   

const closeSideBar = () => {
    if(sidebarOpen){
        sideBar.classList.remove('sidebar-responsive');
        sidebarOpen = false;
    }
}

// chart
var barChartsOptions = {
    series: [{
    data: [10,8,6,4,2]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar: {
        show:false
    },
  },
  colors:[
    "#246dec",
    "#cc3c43",
    "#367952",
    "#f5b74f",
    "#4f35a1"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columWidth:'400',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ['Laptop', 'phone', 'monitor', 'headpphones', 'camera'
    ],
  }
  };

  var chart = new ApexCharts(document.querySelector("#barchart"), barChartsOptions);
  chart.render();


  //area chart
  var areaChart = {
    series: [{
    name: 'Purchase Orders',
    type: 'area',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Sales Orders',
    type: 'line',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 350,
    type: 'area',
    toolbar:{
        show:false,
    },
  },

  colors:["#246dec", "#4f35a1"],
  dataLabels:{enabled:false},
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type:'solid',
    opacity: [0.35, 1],
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if(typeof y !== "undefined") {
          return  y.toFixed(0) + " points";
        }
        return y;
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#areachart"), areaChart);
  chart.render();


