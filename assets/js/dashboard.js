showHourSpent();
showTotalProgress()

function showTotalProgress() {
    const ctx = document.getElementById('chartTotalProgress').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Finish", "Unfinished"],
            datasets: [
                {
                    label: 'Hour Spent',
                    data: [70, 30],
                    backgroundColor: ["#1f8037", "#faf403"],
                },
            ]
        },
        options: {
            responsive: false,
            scales: {
                x: {
                    display: false,
                },
                y: {
                    display: false
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: false
                }
            }
        },
    });
}

function showHourSpent() {
    const ctx = document.getElementById('chartHourSpent').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
                {
                    label: 'Hour Spent',
                    data: [108, 85, 95, 89, 100, 103],
                    backgroundColor: "#1f8037",
                },
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: false
                }
            }
        },
    });
}