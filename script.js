function insert_Row() {
    //Write your code here
   const row = document.getElementById("sampleTable");
	var insertButton = document.getElementById("insertRow");

	  var newRow = row.insertRow(0); 

            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);

            // Set cell content
            cell1.innerHTML = "New Cell1";
            cell2.innerHTML = "New Cell2";
}