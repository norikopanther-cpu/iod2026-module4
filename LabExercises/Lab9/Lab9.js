window.onload = function () {
  const myChart = echarts.init(document.getElementById("main"));

  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
      const categoryCounts = {};

      products.forEach(product => {
        const category = product.category;
        categoryCounts[category] = (categoryCounts[category] || 0) + 1;
      });

      const categories = Object.keys(categoryCounts);
      const counts = Object.values(categoryCounts);

      const options = {
        title: {
          text: "Fake Store Categories"
        },
        tooltip: {},
        xAxis: {
          type: "category",
          data: categories
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "# products",
            type: "bar",
            data: counts
          }
        ]
      };

      myChart.setOption(options);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
};