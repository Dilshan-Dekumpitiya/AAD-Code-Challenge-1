// /**
//  * Disable Buttons
//  * */
// $("#btnAddToCart").attr('disabled', true);
// $("#btnPurchase").attr('disabled', true);
//
// /**
//  * Generate New Order ID
//  * */
// function generateOrderID() {
//     if (orders.length > 0) {
//         let lastId = orders[orders.length - 1].oId;
//         let digit = lastId.substring(6);
//         let number = parseInt(digit) + 1;
//         return lastId.replace(digit, number);
//     } else {
//         return "ODI-001";
//     }
// }
//
// /**
//  * Add Order Date
//  * */
// function setCurrentDate() {
//     let orderDate = $("#orderDate");
//     let today = new Date();
//     let dd = String(today.getDate()).padStart(2, '0');
//     let mm = String(today.getMonth() + 1).padStart(2, '0');
//     let yyyy = today.getFullYear();
//     today = dd + '/' + mm + '/' + yyyy;
//     orderDate.val(today);
// }
//
// /**
//  * Load All Customers
//  * */
// function loadAllCustomersForOption() {
//     $("#cmbCustomerId").empty();
//     for (let cus of customers) {
//         $("#cmbCustomerId").append(`<option>${cus.id}</option>`);
//     }
// }
//
// /**
//  * Customers Combo Box
//  * */
// $("#cmbCustomerId").click(function () {
//     let rCmbC = customers.find(({id}) => id === $("#cmbCustomerId").val());
//     $("#customerName").val(rCmbC.name);
//     $("#customerAddress").val(rCmbC.address);
//     $("#customerSalary").val(rCmbC.salary);
// });
//
// /**
//  * Load All Items
//  * */
// function loadAllItemsForOption() {
//     $("#cmbItemCode").empty();
//     for (let item of items) {
//         $("#cmbItemCode").append(`<option>${item.code}</option>`);
//     }
// }
//
// /**
//  * Items Combo Box
//  * */
// $("#cmbItemCode").click(function () {
//     let rCmbI = items.find(({code}) => code === $("#cmbItemCode").val());
//     $("#itemName").val(rCmbI.name);
//     $("#itemPrice").val(rCmbI.price);
//     $("#qtyOnHand").val(rCmbI.qty);
// });
//
// /**
//  * Clear All
//  * */
// $("#btnClearAll").click(function () {
//     clearDetails();
// });
//
// function clearDetails() {
//     $('#cmbCustomerId,#customerName,#customerAddress,#customerSalary,#cmbItemCode,#itemName,#itemPrice,#qtyOnHand,#buyQty,#txtDiscount,#txtTotal,#txtDiscount,#txtSubTotal,#txtCash,#txtBalance').val("");
// }
//
// /**
//  * Item Details
//  * */
// let itemCode;
// let itemName;
// let itemPrice;
// let itemQty;
// let itemOrderQty;
//
// let total = 0;
// let discount = 0;
// let subTotal = 0;
//
// /**
//  * Add To Cart
//  * */
// let tableRow = [];
// $("#btnAddToCart").click(function () {
//     let duplicate = false;
//
//     for (let i = 0; i < $("#tblAddToCart tr").length; i++) {
//         if ($("#cmbItemCode option:selected").text() === $("#tblAddToCart tr").children(':nth-child(1)')[i].innerText) {
//             duplicate = true;
//         }
//     }
//     if (duplicate !== true) {
//
//         loadCartTableDetail();
//         reduceQty($("#buyQty").val());
//         calcTotal($("#buyQty").val() * $("#itemPrice").val());
//
//     } else if (duplicate === true) {
//
//         manageQtyOnHand(tableRow.children(':nth-child(4)').text(), $("#buyQty").val());
//         $(tableRow).children(':nth-child(4)').text($("#buyQty").val());
//
//         manageTotal(tableRow.children(':nth-child(5)').text(), $("#buyQty").val() * $("#itemPrice").val());
//         $(tableRow).children(':nth-child(5)').text($("#buyQty").val() * $("#itemPrice").val());
//
//     }
//
//     /**
//      * Add To Table
//      * */
//     $("#tblAddToCart>tr").click('click', function () {
//         tableRow = $(this);
//         let itemCode = $(this).children(":eq(0)").text();
//         let itemName = $(this).children(":eq(1)").text();
//         let unitPrice = $(this).children(":eq(2)").text();
//         let qty = $(this).children(":eq(3)").text();
//         let total = $(this).children(":eq(4)").text();
//
//         $("#cmbItemCode").val(itemCode);
//         $("#itemName").val(itemName);
//         $("#itemPrice").val(unitPrice);
//         $("#buyQty").val(qty);
//         $("#txtTotal").val(total);
//     });
// });
//
// /**
//  * Reduce QtyOnHand
//  * */
// function reduceQty(orderQty) {
//     let minQty = parseInt(orderQty);
//     let reduceQty = parseInt($("#qtyOnHand").val());
//     reduceQty = reduceQty - minQty;
//     $("#qtyOnHand").val(reduceQty);
// }
//
// /**
//  * Calculate Total
//  * */
// function calcTotal(amount) {
//     total += amount;
//     $("#txtTotal").val(total);
// }
//
// /**
//  * Add To Table
//  * */
// $("#tblAddToCart").empty();
//
// function loadCartTableDetail() {
//     itemCode = $("#cmbItemCode").val();
//     itemName = $("#itemName").val();
//     itemPrice = $("#itemPrice").val();
//     itemQty = $("#qtyOnHand").val();
//     itemOrderQty = $("#buyQty").val();
//
//     let total = itemPrice * itemOrderQty;
//     let row = `<tr><td>${itemCode}</td><td>${itemName}</td><td>${itemPrice}</td><td>${itemOrderQty}</td><td>${total}</td></tr>`;
//
//     $("#tblAddToCart").append(row);
// }
//
// /**
//  * Manage QtyOnHand
//  * */
// function manageQtyOnHand(preQty, nowQty) {
//     var preQty = parseInt(preQty);
//     var nowQty = parseInt(nowQty);
//     let avaQty = parseInt($("#qtyOnHand").val());
//
//     avaQty = avaQty + preQty;
//     avaQty = avaQty - nowQty;
//     $("#qtyOnHand").val(avaQty);
// }
//
// /**
//  * Manage Total
//  * */
// function manageTotal(preTotal, nowTotal) {
//     total -= preTotal;
//     total += nowTotal;
//     $("#txtTotal").val(total);
// }
//
// /**
//  * Update QtyOnHand
//  * */
// $("#btnAddToCart").click(function () {
//     let itemIdQ = $("#cmbItemCode").val();
//     let response = updateItemQty(itemIdQ);
//     if (response) {
//     }
// });
//
// function updateItemQty(itemIdQ) {
//     let itemQ = searchItemQty(itemIdQ);
//     if (itemQ != null) {
//         itemQ.qty = $("#qtyOnHand").val();
//         loadAllItems();
//         return true;
//     } else {
//         return false;
//     }
// }
//
// function searchItemQty(itemIdQ) {
//     for (let itemQ of items) {
//         if (itemQ.code === itemIdQ) {
//             return itemQ;
//         }
//     }
//     return null;
// }
//
// /**
//  * Purchase Order
//  * */
// $("#btnPurchase").click(function () {
//     placeOrder();
//     pushOrderDetails();
//     $("#orderId").val(generateOrderID());
//     clearDetails();
//     $("#tblAddToCart").empty();
// });
//
// /**
//  * PlaceOrder to Order Array
//  * */
// function placeOrder() {
//     //create object
//     let orderArrayList = new order($("#orderId").val(), $("#cmbCustomerId").val(), $("#orderDate").val(), $("#txtSubTotal").val(), $("#txtDiscount").val());
//
//     orders.push(orderArrayList);
//     console.log(orderArrayList);
//     saveUpdateAlert("Place Ordering", "Successfully.");
// }
//
// /**
//  * PlaceOrder to OrderDetails Array
//  * */
// function pushOrderDetails() {
//     for (let i = 0; i < $("#tblAddToCart tr").length; i++) {
//         let orderId = $("#orderId").val();
//         let cusId = $("#cmbCustomerId").val();
//         let itemId = $("#tblAddToCart tr").children(':nth-child(1)')[i].innerText;
//         let qty = $("#tblAddToCart tr").children(':nth-child(4)')[i].innerText;
//         let total = $("#tblAddToCart tr").children(':nth-child(5)')[i].innerText;
//
//         let orderDetailArrayList = new orderDetail(orderId, cusId, itemId, qty, total);
//
//         orderDetails.push(orderDetailArrayList);
//         console.log(orderDetailArrayList);
//     }
// }
//
// /**
//  * Enter Buy Qty and Check Qty On Hand
//  * */
// $(document).on("change keyup blur", "#buyQty", function () {
//     let qtyOnHand = $("#qtyOnHand").val();
//     let buyQty = $("#buyQty").val();
//     let buyOnHand = qtyOnHand - buyQty;
//     if (buyOnHand < 0) {
//         $("#lblCheckQty").parent().children('strong').text(qtyOnHand + " : Empty On Stock..!!");
//         $("#btnAddToCart").attr('disabled', true);
//     } else {
//         $("#lblCheckQty").parent().children('strong').text("");
//         $("#btnAddToCart").attr('disabled', false);
//     }
// });
//
// /**
//  * Enter Discount & Sub Total
//  * */
// $(document).on("change keyup blur", "#txtDiscount", function () {
//     discount = $("#txtDiscount").val();
//     discount = (total / 100) * discount;
//     subTotal = total - discount;
//
//     $("#txtSubTotal").val(subTotal);
// });
//
// /**
//  * Enter Cash and Display Balance
//  * */
// $(document).on("change keyup blur", "#txtCash", function () {
//     let cash = $("#txtCash").val();
//     let balance = cash - subTotal;
//     $("#txtBalance").val(balance);
//     if (balance < 0) {
//         $("#lblCheckSubtotal").parent().children('strong').text(balance + " : plz enter valid Balance");
//         $("#btnPurchase").attr('disabled', true);
//     } else {
//         $("#lblCheckSubtotal").parent().children('strong').text("");
//         $("#btnPurchase").attr('disabled', false);
//     }
// });
//
// /**
//  * Remove Row
//  * */
// $("#tblAddToCart").dblclick(function () {
//     Swal.fire({
//         title: 'Do you want to Delete the Select row?',
//         showDenyButton: true,
//         showCancelButton: true,
//         confirmButtonText: 'Yes',
//         denyButtonText: 'No',
//         customClass: {
//             actions: 'my-actions', cancelButton: 'order-1 right-gap', confirmButton: 'order-2', denyButton: 'order-3',
//         }
//     }).then((result) => {
//         if (result.isConfirmed) {
//             $(this).children('tr').eq(0).remove();
//             Swal.fire('Delete!', '', 'success')
//         } else if (result.isDenied) {
//             Swal.fire('Select row are not Delete', '', 'info')
//         }
//     })
// });

var lastOrder;
var orderCount;

function loadAllOrder() {
    $("#OrderHistory-tbody").empty();
    $.ajax({
        url: "http://localhost:8080/AAD-POS/order",
        type: "GET",
        success: function (response) {
            for (const order of response){
                let recode = `<tr><td class='date'>${order.date}</td><td class='order_id'>${order.order_id}</td><td class='cus_id'>${order.cusName}</td><td class='net_total'>${order.netTotal}</td></tr>`
                $("#OrderHistory-tbody").append(recode);
            }

            lastOrder = response[response.length - 1];
            orderCount = response.length;
        }
    })
}

//generate Customer_ID
function generateOrderID() {
    if (orderCount === 0) {
        $('#Order_id').text("O001");
    } else {
        const lastID = lastOrder.order_id.split("O");
        const lastNumber = parseInt(lastID[1], 10);
        const newNumber = lastNumber + 1;
        const newID = "O" + newNumber.toString().padStart(3, '0');
        $('#Order_id').text(newID);
        console.log(newID);
    }
}

//Combo Box Row Click
$(document).ready(function() {
    $('#select').change(function(){
        var selectedOption = $(this).find('option:selected');
        let item_id = selectedOption.val();

        for (const item of allItem){
            if (item_id===item.item_id){
                $('#itemName').text(item.item_name);
                $('#itemQut').text(item.quantity);
                $('#itemPrice').text(item.price);
            }
        }
        $('#quantity_placeOrder').focus();
    });
});

document.getElementById("select").addEventListener("change", function() {
    if($('#select').val() === "Select Item ID"){
        $('#itemName').text("______________________________");
        $('#itemQut').text("_____________");
        $('#itemPrice').text("___________");
    }
});


//Add Button
$("#placeOrderbtns>button[type='button']").eq(0).on("click", () => {

    let item_id = $("#select").val();
    let quantity;
    let unit_price;
    let total;

    var itemElement;

    for (const item of allItem){
        if (item_id===item.item_id){
            itemElement = item;
            quantity = parseInt($("#quantity_placeOrder").val());
            unit_price = parseFloat(item.price);
            total = quantity * unit_price;
        }
    }

    let existingRow = $(`#placeOrder-tbody tr[data-item-id="${item_id}"]`);

    if (existingRow.length) {
        let existingQuantity = parseInt(existingRow.find('.quantity').text());
        let newQuantity = existingQuantity + quantity;
        let newTotal = newQuantity * unit_price;

        if (itemElement && newQuantity <= itemElement.quantity) {
            existingRow.find('.quantity').text(newQuantity);
            existingRow.find('.price').text(newTotal);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'The quantity is not enough!',
                text: 'Something went wrong!'
            });
        }
    } else {
        if (itemElement && itemElement.quantity >= quantity) {
            let record = `
    <tr data-item-id="${item_id}">
        <td class="item_id">${item_id}</td>
        <td class="item_price">${unit_price}</td>
        <td class="quantity">${quantity}</td>
        <td class="price">${total}</td>
        <td class="button">
            <button class="removeButton" type="button">
                <i class="fas fa-trash"></i>
            </button>
        </td>
    </tr>`;

            $("#placeOrder-tbody").append(record);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'The quantity is not enough!',
                text: 'Something went wrong!'
            });
        }

    }

    let netTot = 0;
    $("#placeOrder-tbody tr").each(function() {
        netTot += parseFloat($(this).find('.price').text());
    });

    $("#tot").text(netTot);

    $(".removeButton").on("click", function() {
        $(this).closest('tr').remove();

        let newNetTot = 0;
        $("#placeOrder-tbody tr").each(function() {
            newNetTot += parseFloat($(this).find('.price').text());
        });

        $("#tot").text(newNetTot);
    });

    $('#itemName').text("______________________________");
    $('#itemQut').text("_____________");
    $('#itemPrice').text("___________");

    $("#select").val("Select Item ID");
    $("#quantity_placeOrder").val("")
});

$("#placeOrderbtnResetbtn").eq(0).on("click", () => {
    $('#itemName').text("______________________________");
    $('#itemQut').text("_____________");
    $('#itemPrice').text("___________");
    $('#placeOrder-tbody>tr').remove();
    $("#tot").text(0);
    $('#netTotal').text(0);
});

$("#calculate").on("click", () => {
    let tot = $("#tot").text();
    let discount = $("#discount").val();

    $('#netTotal').text(tot*(discount/100));
});

//Place Order Button
$("#btnPurchase").on('click',()=>{
    let amount = parseFloat($('#amount').val());
    let netTotal = parseFloat($('#netTotal').text());
    let date = $('#currentDate').text();
    let order_id = $('#Order_id').text();

    var selectedOption = $('#selectCus_ID').find('option:selected');
    let cusName = selectedOption.val()

    $("#placeOrder-tbody tr").each(function() {
        let quantity = parseFloat($(this).find('.quantity').text());
        let item_id = $(this).find('.item_id').text();

        console.log(item_id,quantity);

        //-----------------Update Item Quantity-----------------
        const item = {
            item_id: item_id,
            quantity: quantity
        };

        const item_JSON = JSON.stringify(item);

        const sendAjax = (itemJSON) => {
            $.ajax({
                url: "http://localhost:8080/AAD-POS/order",
                type: "PUT",
                data: itemJSON,
                contentType: "application/json",
                success: function () {
                    loadAllItem();
                    /*$("#storebtns>button[type='button']").eq(3).click();*/
                    /*Swal.fire({
                      icon: 'success',
                      title: 'Item Update Successful',
                      showConfirmButton: false,
                      timer: 1500
                    })*/
                }
            });
        };
        sendAjax(item_JSON);
    });


    const order = {
        date: date,
        order_id: order_id,
        cusName: cusName,
        netTotal: netTotal
    };

    const order_JSON = JSON.stringify(order);

    console.log(order_JSON)

    if (amount >= netTotal) {
        let cash = amount - netTotal;
        const sendAjax = (orderJSON) => {
            $.ajax({
                url: "http://localhost:8080/AAD-POS/order",
                type: "POST",
                data: orderJSON,
                contentType: "application/json",
                success: function () {
                    loadAllOrder();
                    setTimeout(After1Minute, 60);
                    $('#amount').val("");
                    $('#tot').text(0);
                    $('#netTotal').text(0);
                    $('#discount').val(0);
                    $('#placeOrderbtnResetbtn').click();
                    /*$("#storebtns>button[type='button']").eq(3).click();*/
                    Swal.fire({
                        icon: 'success',
                        title: `Order Successful! \n Cash: ${cash.toFixed(2)}`,
                        showConfirmButton: true
                    });
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
        sendAjax(order_JSON);
    }else {
        Swal.fire({
            icon: 'error',
            title: 'The amount is not enough!',
            text: 'Something went wrong!'
        });
    }
});