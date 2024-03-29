// /**
//  * Save Item
//  * */
// $("#btnISave").click(function () {
//
//     //create object
//     let itemArray = new item(
//         $("#txtItemsId").val(),
//         $("#txtItemName").val(),
//         $("#txtItemQty").val(),
//         $("#txtItemPrice").val());
//
//     clearTextFieldsI();
//
//     //Alert Save
//     saveUpdateAlert("Item", "saved.");
//
//     //Add the item object to the array
//     items.push(itemArray);
//
//     /*console.log(items);*/
//     $("#txtItemsId").val(generateItemID());
//     loadAllItems();
// });
//
// /**
//  * Clear Text Fields in +New Item
//  * */
// $("#btnClearI").click(function () {
//     clearTextFieldsI();
// });
//
// function clearTextFieldsI() {
//     txtItemsId.value = '';
//     txtItemName.value = '';
//     txtItemQty.value = '';
//     txtItemPrice.value = '';
//     $("#txtItemsId").focus();
//     checkValidity(ItemsValidations);
// }
//
// /**
//  * Search Item
//  * */
// $("#btnSearchItem").click(function () {
//     var resultI = items.find(({code}) => code === $("#ItemIdSearch").val());
//     console.log(resultI);
//
//     if (resultI != null) {
//         $("#ItemTable").empty();
//         var row = `<tr><td>${resultI.code}</td><td>${resultI.name}</td><td>${resultI.qty}</td><td>${resultI.price}</td></tr>`;
//         $("#ItemTable").append(row);
//
//         $("#searchItemId").val(resultI.code);
//         $("#updateItemName").val(resultI.name);
//         $("#updateItemQty").val(resultI.qty);
//         $("#updateItemPrice").val(resultI.price);
//
//         $("#searchDItemId").val(resultI.code);
//         $("#DItemName").val(resultI.name);
//         $("#DItemQty").val(resultI.qty);
//         $("#DItemPrice").val(resultI.price);
//     } else {
//         emptyMassage();
//         clearCDTextFields();
//     }
// });
//
// /**
//  * Clear Input Field in Search Bar
//  * */
// $("#clearSearchItem").click(function () {
//     ItemIdSearch.value = '';
//     clearUTextFields();
//     clearDTextFields();
//     loadAllItems();
// });
//
// /**
//  * Auto Forces Input Field in Search Bar
//  * */
// $('#ItemIdSearch').keypress(function (event) {
//     if (event.which === 13) {
//         $('#btnSearchItem').focus();
//     }
// });
// $('#btnSearchItem').keypress(function (event) {
//     if (event.which === 13) {
//         $('#ItemIdSearch').focus();
//     }
// });
//
// /**
//  * Update Item
//  * */
// $("#btnUpdateItem").click(function () {
//     let ItemId = $("#searchItemId").val();
//     let response = updateItem(ItemId);
//     if (response) {
//         saveUpdateAlert(ItemId, "updated.");
//         checkValidity(ItemsValidationsUpdate);
//     } else {
//         unSucsessUpdateAlert(ItemId);
//     }
// });
//
// function updateItem(itemId) {
//     let item = searchItem(itemId);
//     if (item != null) {
//         item.code = $("#searchItemId").val();
//         item.name = $("#updateItemName").val();
//         item.qty = $("#updateItemQty").val();
//         item.price = $("#updateItemPrice").val();
//         loadAllItems();
//         return true;
//     } else {
//         return false;
//     }
// }
//
// /**
//  * Clear Text Fields in Update Item
//  * */
// $("#btnUclearI").click(function () {
//     clearUTextFields();
// });
//
// function clearUTextFields() {
//     searchItemId.value = '';
//     updateItemName.value = '';
//     updateItemQty.value = '';
//     updateItemPrice.value = '';
//     checkValidity(ItemsValidationsUpdate);
// }
//
// /**
//  * Delete Item
//  * */
// $("#btnDeleteItems").click(function () {
//     let deleteIID = $("#searchDItemId").val();
//     yesNoAlertIDelete(deleteIID);
// });
//
// /**
//  * Search Id Enter Pressed And Load TextFields
//  * */
// $("#searchDItemId").keyup(function (event) {
//     if (event.keyCode === 13) {
//         var resultI = items.find(({code}) => code === $("#searchDItemId").val());
//         console.log(resultI);
//
//         if (resultI != null) {
//             $("#searchDItemId").val(resultI.code);
//             $("#DItemName").val(resultI.name);
//             $("#DItemQty").val(resultI.qty);
//             $("#DItemPrice").val(resultI.price);
//         } else {
//             emptyMassage();
//             clearCDTextFields();
//         }
//     }
// });
//
// /**
//  * Clear Text Fields in Delete Item
//  * */
// $("#btnDclearI").click(function () {
//     clearDTextFields();
// });
//
// function clearDTextFields() {
//     searchDItemId.value = '';
//     DItemName.value = '';
//     DItemQty.value = '';
//     DItemPrice.value = '';
// }
//
// /**
//  * View All Items
//  * */
// $("#btnViewAllItems").click(function () {
//     loadAllItems();
// });
//
// /**
//  * Load All Items
//  * */
// function loadAllItems() {
//
//     //remove all the table body content before adding data
//     $("#ItemTable").empty();
//
//
//     // get all items records from the array
//     for (var item of items) {
//         console.log(item);// items object
//
//         // Using String Literals to do the same thing as above
//         var row = `<tr><td>${item.code}</td><td>${item.name}</td><td>${item.qty}</td><td>${item.price}</td></tr>`;
//
//         //then add it to the table body of items table
//         $("#ItemTable").append(row);
//     }
//     tblClickEventsI();
//     dblRowClickEventsItem();
//     loadAllItemsForOption();
// }
//
// /**
//  * Table Listener Click & Load To TextFields
//  * */
// function tblClickEventsI() {
//     $("#ItemTable>tr").click(function () {
//         let code = $(this).children().eq(0).text();
//         let name = $(this).children().eq(1).text();
//         let qty = $(this).children().eq(2).text();
//         let price = $(this).children().eq(3).text();
//
//         $("#searchItemId").val(code);
//         $("#updateItemName").val(name);
//         $("#updateItemQty").val(qty);
//         $("#updateItemPrice").val(price);
//
//         $("#searchDItemId").val(code);
//         $("#DItemName").val(name);
//         $("#DItemQty").val(qty);
//         $("#DItemPrice").val(price);
//     });
// }
//
// /**
//  * Table Listener Double Click & Remove
//  * */
// function dblRowClickEventsItem() {
//     $("#ItemTable>tr").on('dblclick', function () {
//         let deleteItemID = $(this).children().eq(0).text();
//         yesNoAlertIDelete(deleteItemID);
//
//     });
// }
//
// /**
//  * Generate New Item Code
//  * */
// function generateItemID() {
//     if (items.length > 0) {
//         let lastId = items[items.length - 1].code;
//         let digit = lastId.substring(6);
//         let number = parseInt(digit) + 1;
//         return lastId.replace(digit, number);
//     } else {
//         return "I00-001";
//     }
// }
//
// /**
//  * Input Fields warnings in +New Item
//  * */
// $("#txtItemsId").focus();
// const regExItemCode = /^(I00-)[0-9]{3,4}$/;
// const regExItemName = /^[A-z ]{3,20}$/;
// const regExItemPrice = /^[0-9]{1,10}$/;
// const regExItemQtyOnHand = /^[0-9]{1,}[.]?[0-9]{1,2}$/;
//
// let ItemsValidations = [];
// ItemsValidations.push({
//     reg: regExItemCode,
//     field: $('#txtItemsId'),
//     error: 'Item ID Pattern is Wrong : I00-001'
// });
// ItemsValidations.push({
//     reg: regExItemName,
//     field: $('#txtItemName'),
//     error: 'Item Name Pattern is Wrong : A-z 3-20'
// });
// ItemsValidations.push({
//     reg: regExItemPrice,
//     field: $('#txtItemQty'),
//     error: 'Item Qty Pattern is Wrong : 0-9 1-10'
// });
// ItemsValidations.push({
//     reg: regExItemQtyOnHand,
//     field: $('#txtItemPrice'),
//     error: 'Item Salary Pattern is Wrong : 100 or 100.00'
// });
//
// /**
//  * Input Fields warnings in Update Item
//  * */
// let ItemsValidationsUpdate = [];
// ItemsValidationsUpdate.push({
//     reg: regExItemCode,
//     field: $('#searchItemId'),
//     error: 'Item ID Pattern is Wrong : I00-001'
// });
// ItemsValidationsUpdate.push({
//     reg: regExItemName,
//     field: $('#updateItemName'),
//     error: 'Item Name Pattern is Wrong : A-z 3-20'
// });
// ItemsValidationsUpdate.push({
//     reg: regExItemPrice,
//     field: $('#updateItemQty'),
//     error: 'Item Qty Pattern is Wrong : 0-9 1-10'
// });
// ItemsValidationsUpdate.push({
//     reg: regExItemQtyOnHand,
//     field: $('#updateItemPrice'),
//     error: 'Item Salary Pattern is Wrong : 100 or 100.00'
// });
//
// /**
//  * Disable "Tab" Key in +New Item
//  * */
// $("#txtItemsId,#txtItemName,#txtItemQty,#txtItemPrice").on('keydown', function (event) {
//     if (event.key === "Tab") {
//         event.preventDefault();
//     }
// });
//
// $("#txtItemsId,#txtItemName,#txtItemQty,#txtItemPrice").on('keyup', function (event) {
//     checkValidity(ItemsValidations);
// });
//
// $("#txtItemsId,#txtItemName,#txtItemQty,#txtItemPrice").on('blur', function (event) {
//     checkValidity(ItemsValidations);
// });
//
// /**
//  * Enable "Enter" Key in +New Item
//  * */
// $("#txtItemsId").on('keydown', function (event) {
//     if (event.key === "Enter" && check(regExItemCode, $("#txtItemsId"))) {
//         $("#txtItemName").focus();
//     } else {
//         focusText($("#txtItemsId"));
//     }
// });
//
// $("#txtItemName").on('keydown', function (event) {
//     if (event.key === "Enter" && check(regExItemName, $("#txtItemName"))) {
//         focusText($("#txtItemQty"));
//     }
// });
//
// $("#txtItemQty").on('keydown', function (event) {
//     if (event.key === "Enter" && check(regExItemPrice, $("#txtItemQty"))) {
//         focusText($("#txtItemPrice"));
//     }
// });
//
// $("#txtItemPrice").on('keydown', function (event) {
//     if (event.key === "Enter" && check(regExItemQtyOnHand, $("#txtItemPrice"))) {
//         if (event.which === 13) {
//             $('#btnISave').focus();
//         }
//     }
// });
//
// /**
//  * Disable Save Item Button
//  * */
// function setButtonStateIS(value) {
//     if (value > 0) {
//         $("#btnISave").attr('disabled', true);
//     } else {
//         $("#btnISave").attr('disabled', false);
//     }
// }
//
// /**
//  * Disable "Tab" Key in Update Item
//  * */
// $("#searchItemId,#updateItemName,#updateItemQty,#updateItemPrice").on('keydown', function (event) {
//     if (event.key === "Tab") {
//         event.preventDefault();
//     }
// });
//
// $("#searchItemId,#updateItemName,#updateItemQty,#updateItemPrice").on('keyup', function (event) {
//     checkValidity(ItemsValidationsUpdate);
// });
//
// $("#searchItemId,#updateItemName,#updateItemQty,#updateItemPrice").on('blur', function (event) {
//     checkValidity(ItemsValidationsUpdate);
// });
//
// /**
//  * Enable "Enter" Key in Update Item
//  * */
// $("#searchItemId").on('keydown', function (event) {
//     if (event.key === "Enter" && check(regExItemCode, $("#searchItemId"))) {
//         $("#updateItemName").focus();
//     } else {
//         focusText($("#searchItemId"));
//     }
// });
//
// $("#updateItemName").on('keydown', function (event) {
//     if (event.key === "Enter" && check(regExItemName, $("#updateItemName"))) {
//         focusText($("#updateItemQty"));
//     }
// });
//
// $("#updateItemQty").on('keydown', function (event) {
//     if (event.key === "Enter" && check(regExItemPrice, $("#updateItemQty"))) {
//         focusText($("#updateItemPrice"));
//     }
// });
//
// $("#updateItemPrice").on('keydown', function (event) {
//     if (event.key === "Enter" && check(regExItemQtyOnHand, $("#updateItemPrice"))) {
//         if (event.which === 13) {
//             $('#btnUpdateItem').focus();
//         }
//     }
// });
//
// /**
//  * Disable Update Item Button
//  * */
// function setButtonStateIU(value) {
//     if (value > 0) {
//         $("#btnUpdateItem").attr('disabled', true);
//     } else {
//         $("#btnUpdateItem").attr('disabled', false);
//     }
// }
//
// function deleteItems(itemID) {
//     let item = searchItem(itemID);
//     if (item != null) {
//         let indexNumber1 = items.indexOf(item);
//         items.splice(indexNumber1, 1);
//         loadAllItems();
//         clearDTextFields();
//         return true;
//     } else {
//         return false;
//     }
// }
//
// function searchItem(itemID) {
//     for (let item of items) {
//         if (item.code === itemID) {
//             return item;
//         }
//     }
//     return null;
// }

var row_index1 = null;

var lastItem;
var itemCount;

function loadAllItem() {
    $("#item-tbl-body").empty();

    $("#select").empty();
    $("#select").html(`<option className="options">Select Item ID</option>`);

    $.ajax({
        url: "http://localhost:8080/AAD-POS/item",
        type: "GET",
        success: function (response) {
            for (const item of response){
                let record = `<tr><td class="item_id">${item.item_id}</td><td class="item_name">${item.item_name}</td><td class="quantity">${item.quantity}</td><td class="price">${item.price}</td><td class="description">${item.description}</td></tr>`;
                $("#item-tbl-body").append(record);
            }
            for (const item of response){
                allItem = response;

                let recode = `<option class="options">${item.item_id}</option>`
                $("#select").append(recode);
            }

            lastItem = response[response.length - 1];
            itemCount = response.length;
        }
    })
};

$("#storebtns>button[type='button']").eq(3).on("click", () => {
    setTimeout(After1Minute, 60);
    $("#txtItemQty").val("");
    $("#txtItemName").val("");
    $("#txtItemPrice").val("");
});

//generate Customer_ID
function generateItemID() {
    if (itemCount === 0) {
        $("#item_id").val("I001");
    } else {
        const lastID = lastItem.item_id.split("I");
        const lastNumber = parseInt(lastID[1], 10);
        const newNumber = lastNumber + 1;
        const newID = "I" + newNumber.toString().padStart(3, '0');
        $("#txtItemsId").val(newID);
    }
}

//Submit
$("#btnISave>button[type='button']").eq(0).on("click", () => {
    let item_id = $("#txtItemsId").val();
    let item_name = $("#txtItemName").val();
    let quantity = $("#txtItemQty").val();
    let price = $("#txtItemPrice").val();

    //------------------------------------------------------
    const item = {
        txtItemsId: item_id,
        txtItemName: item_name,
        txtItemQty: quantity,
        txtItemPrice: price
    };

    const item_JSON = JSON.stringify(item);

    const sendAjax = (itemJSON) => {
        $.ajax({
            url: "http://localhost:8080/AAD-POS/item",
            type: "POST",
            data: itemJSON,
            contentType: "application/json",
            success: function () {
                loadAllItem();
                $("#storebtns>button[type='button']").eq(3).click();
                Swal.fire({
                    icon: 'success',
                    title: 'Item Saved Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
            },
            error: function () {
                Swal.fire({
                    icon: 'error',
                    title: 'Please Check Text Field',
                    text: 'Something went wrong!'
                })
            }
        });
    };
    sendAjax(item_JSON);
    setTimeout(After1Minute, 60);
});

//Click Row
$("tbody").on("click", "tr", function() {
    row_index1 = $(this).index();

    let item_id = $(this).find(".txtItemsId").text();
    let item_name = $(this).find(".txtItemName").text();
    let quantity = $(this).find(".txtItemQty").text();
    let price = $(this).find(".txtItemPrice").text();

    $("#txtItemsId").val(item_id);
    $("#txtItemName").val(item_name);
    $("#txtItemQty").val(quantity);
    $("#txtItemPrice").val(price);
});

//Update
$("#updateItem>button[type='button']").eq(1).on("click", () => {
    let item_id = $("#txtItemsId").val();
    let item_name = $("#txtItemName").val();
    let quantity = $("#txtItemQty").val();
    let price = $("#txtItemPrice").val();

    //------------------------------------------------------
    const item = {
        txtItemsId: item_id,
        txtItemName: item_name,
        txtItemQty: quantity,
        txtItemPrice: price
    };
    const item_JSON = JSON.stringify(item);

    const sendAjax = (itemJSON) => {
        $.ajax({
            url: "http://localhost:8080/AAD-POS/item",
            type: "PUT",
            data: itemJSON,
            contentType: "application/json",
            success: function () {
                loadAllItem();
                $("#storebtns>button[type='button']").eq(3).click();
                Swal.fire({
                    icon: 'success',
                    title: 'Item Update Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
            },
            error: function () {
                Swal.fire({
                    icon: 'error',
                    title: 'Please Check Text Field',
                    text: 'Something went wrong!'
                })
            }
        });
    };
    sendAjax(item_JSON);
    setTimeout(After1Minute, 60);
});

//Delete
$("#deleteItem>button[type='button']").eq(2).on("click", () => {
    let item_id = $("#txtItemsId").val();

    Swal.fire({
        title: 'Are you sure?',
        text: "You want delete row?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your row has been deleted.',
                'success'
            )
            setTimeout(After1Minute, 60);
            $.ajax({
                url: "http://localhost:8080/AAD-POS/item?item_id="+item_id,
                type: "DELETE",
                success: function () {
                    $("#storebtns>button[type='button']").eq(3).click();
                    loadAllItem();
                }
            });
        }
    })
});