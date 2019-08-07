const filterJson = (data, filterCreteria) => {
    if(data && filterCreteria) {
       filteredData = filterCreteria.filter(obj => {
            if(data[obj[key]] == obj[value]) {
                return true;
            }
        });
        return filteredData;
    } 
    return data;
} 



module.exports ={
    filterJson
}