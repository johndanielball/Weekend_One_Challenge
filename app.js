$("document").ready(function() {


	

	$("#employeeForm").on("submit", function(event) {
		event.preventDefault();

		var values = {};

		$.each($("#employeeForm").serializeArray(), function(i, field) {
			values[field.name] = field.value;
		});

		$("#employeeForm").find("input[type=text]").val("");

		var row = document.createElement("tr");
		var flName = document.createElement("td");
		var EIN = document.createElement("td");
		var jobTitle = document.createElement("td");
		var salary = document.createElement("td");

		$(flName).html(values.empWholeName);
		$(EIN).html(values.empID);
		$(jobTitle).html(values.empJobTitle);
		$(salary).html(values.empSalary);
		$(row).append(flName);
		$(row).append(EIN);
		$(row).append(jobTitle);
		$(row).append(salary);

		$(row).addClass("empRecord");
		$(row).insertBefore($("#empRecords > table tr").last());

		var salaryTotal = 0;

		$("#empRecords > table .empRecord").each(function(i, empRecord) {
			salaryTotal += parseInt($(empRecord).find("td").last().text());

		})

		$("#empRecords > table #total td").last().text(salaryTotal);
		
	});


});