 // Data for the chart
 const xValues = Array.from({ length: 7 }, (_, index) => 20 + index * 5); // X-axis values from 20 to 50 with a difference of 5
 const yValues = Array.from({ length: 7 }, (_, index) => (index + 1) * 50); // Y-axis values from 50 to 350 with an increment of 50

 // Create the chart
 const ctx = document.getElementById("stackedBarChart").getContext("2d");
 new Chart(ctx, {
   type: "bar",
   data: {
     labels: xValues,
     datasets: [
       {
         label: "Employer K 73,500",
         data: yValues.map((value) => value / 3),
         backgroundColor: "darkblue",
       },
       {
         label: "Employee K 52,500",
         data: yValues.map((value) => value / 3),
         backgroundColor: "blue",
       },
       {
         label: "Total Interest K 244,313",
         data: yValues.map((value) => value / 3),
         backgroundColor: "lightblue",
       },
     ],
   },
   options: {
     scales: {
       x: {
         stacked: true,
       },
       y: {
         stacked: true,
         beginAtZero: true,
         max: 300,
         ticks: {
           callback: function (value, index, values) {
             return value + "$";
           },
         },
       },
     },
   },
 });