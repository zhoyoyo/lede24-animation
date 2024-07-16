const days = d3.selectAll('svg rect')
const gridSize = 20, gap = 2;

// Step 8. Encode data onto the SVG shapes
days.style('fill','lightgrey')


const greyToColor = function(){

    days
    .transition()
    .duration(2000)
    .style('fill', d=> {
        console.log(d)
    if (d.Happiness == '1') {return 'black'}
    else if (d.Happiness == '2') {return 'lightgrey'}
    else {return 'gold'}
    })
    .attr('width', gridSize)
    .attr('height', gridSize)
    .on('end', colorToGrey)

}

const colorToGrey = function(){
days
    .transition()
    .duration(2000)
    .style('fill','lightgrey')
    .attr('width', 0)
    .attr('height', 0)
    .on('end', greyToColor)

}

greyToColor();
