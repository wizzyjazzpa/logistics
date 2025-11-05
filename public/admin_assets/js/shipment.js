
 $(document).ready(function(){
                        
                        function generateRandomString(length) {
                        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                        let result = '';
                        for (let i = 0; i < length; i++) {
                            result += chars.charAt(Math.floor(Math.random() * chars.length));
                        }
                        return result;
                        }

                            // Example:
                        const randomString = generateRandomString(15);
                        $('#trackingnumber').val("LP"+randomString);
                        
                        $('#quantity, #weight, #costdelivery').on('input',function(){
                            let weight = parseFloat($('#weight').val()) || 0;
                            let quantity = parseFloat($('#quantity').val()) || 0;
                            let cost = parseFloat($('#costdelivery').val()) || 0;

                            let subtotal = weight * quantity * cost;

                            $('#subtotal').val(subtotal.toFixed(2));

                        })

                        $('#ShipmentForm').on('submit',function(e){
                             e.preventDefault();
                             let staffUser =$('#staffUser').val();
                             let senderName =$('#sendername').val();
                             let senderAddress  =$('#senderaddress').val();
                             let senderPhone  =$('#senderphone').val();
                             let senderEmail =$('#senderemail').val();
                             let paymentMethod =$('#paymentmethod').val();
                             let productType =$('#producttype').val();
                             let deliveryMode =$('#deliverymode').val();
                             let shipmentInsurance =$('#shipmentinsurance').val();
                             let status =$('#status').val();
                             let duration =$('#duration').val();
                             let shipmentOrigin =$('#shipmentorigin').val();
                             let quantity=$('#quantity').val();
                             let weight =$('#weight').val();
                             let costDelivery =$('#costdelivery').val();
                             let subtotal =$('#subtotal').val();
                             let receiverAddress =$('#receiveraddress').val();
                             let receiverFullname =$('#receiverfullname').val()
                             let receiverphone =$('#receiverphone').val();
                             let receiveremail =$('#receiveremail').val();
                             let trackingId =$('#trackingnumber').val();
                             let currentLocation =$('#currentlocation').val();
                             let currentLocationValue =$('#currentlocationvalue').val();
                             let description =$('#description').val();
                            $.ajax({
                                     url: '/api/createShipment',
                                     type: 'POST',
                                     contentType: 'application/json',
                                     data:JSON.stringify({
                                        staffUser,
                                        senderName,
                                        senderAddress,
                                        senderPhone,
                                        senderEmail,
                                        paymentMethod,
                                        productType,
                                        deliveryMode,
                                        shipmentInsurance,
                                        status,
                                        duration,
                                        shipmentOrigin,
                                        quantity,
                                        weight,
                                        costDelivery,
                                        subtotal,
                                        receiverAddress,
                                        receiverFullname,
                                        receiverphone,
                                        receiveremail,
                                        trackingId,
                                        currentLocation,
                                        currentLocationValue,
                                        description
                                    }),
                                    success:function(data){
                                          if(data){
                                                $('#msg').html(`<div class="alert alert-outline-success alert-dismissible fade show" role="alert"> ✅ ${data.message}</div>`);
                                                setTimeout(() => {
                                                $("#msg").fadeOut(800, function () {
                                                    $(this).remove(); // optional: removes it from DOM after fading
                                                });
                                                }, 5000);
                                                
                                                $('#sendername').val('');
                                                $('#senderaddress').val('');
                                                $('#senderphone').val('');
                                                $('#senderemail').val('');
                                                $('#paymentmethod').val('');
                                                $('#producttype').val('');
                                                $('#deliverymode').val('');
                                                $('#shipmentinsurance').val('');
                                                $('#status').val('');
                                                $('#duration').val('');
                                                  $('#shipmentorigin').val('');
                                                $('#quantity').val('');
                                                    $('#weight').val('');
                                                    $('#costdelivery').val('');
                                                               $('#subtotal').val('');
                                                                $('#receiveraddress').val('');
                                                               $('#receiverfullname').val('')
                                                               $('#receiverphone').val('');
                                                                $('#receiveremail').val('');
                                                                $('#trackingnumber').val('');
                                                                $('#currentlocation').val('');
                                                                $('#currentlocationvalue').val('');
                                                                $('#description').val('');
                                          }else{
                                                 $('#msg').html(`<p class='alert alert-success'>error inserting record</p>`)
                                          }
                                    }
                             })
                        })

                       
                    });
$(document).on('click', '.btn_delete', function() {
  const trackingID = $(this).data('trackid');
    $.ajax({
           url: `/api/delete_single_shipment_history/${trackingID}`,
           type:'POST',
           success:function(response){
                if(response){
                    alert(response.message)
                    location.reload();
                }else{
                     alert(response.error);
                }
           }
    })
});

$(document).on('click', '.btn_edit', function() {
  const trackingID = $(this).data('trackid');
   window.location.href=`/updateShipment?id=${trackingID}`;
});

 $('#updateShipmentForm').on('submit',function(e){
                             e.preventDefault();
                             let staffUser =$('#staffUser').val();
                             let senderName =$('#sendername').val();
                             let senderAddress  =$('#senderaddress').val();
                             let senderPhone  =$('#senderphone').val();
                             let senderEmail =$('#senderemail').val();
                             let paymentMethod =$('#paymentmethod').val();
                             let productType =$('#producttype').val();
                             let deliveryMode =$('#deliverymode').val();
                             let shipmentInsurance =$('#shipmentinsurance').val();
                             let status =$('#status').val();
                             let duration =$('#duration').val();
                             let shipmentOrigin =$('#shipmentorigin').val();
                             let quantity=$('#quantity').val();
                             let weight =$('#weight').val();
                             let costDelivery =$('#costdelivery').val();
                             let subtotal =$('#subtotal').val();
                             let receiverAddress =$('#receiveraddress').val();
                             let receiverFullname =$('#receiverfullname').val()
                             let receiverphone =$('#receiverphone').val();
                             let receiveremail =$('#receiveremail').val();
                             let trackingId =$('#trackingNumber').val();
                             let currentLocation =$('#currentlocation').val();
                             let currentLocationValue =$('#currentlocationvalue').val();
                             let description =$('#description').val();
                            $.ajax({
                                     url: '/api/update_single_shipment',
                                     type: 'POST',
                                     contentType: 'application/json',
                                     data:JSON.stringify({
                                        staffUser,
                                        senderName,
                                        senderAddress,
                                        senderPhone,
                                        senderEmail,
                                        paymentMethod,
                                        productType,
                                        deliveryMode,
                                        shipmentInsurance,
                                        status,
                                        duration,
                                        shipmentOrigin,
                                        quantity,
                                        weight,
                                        costDelivery,
                                        subtotal,
                                        receiverAddress,
                                        receiverFullname,
                                        receiverphone,
                                        receiveremail,
                                        trackingId,
                                        currentLocation,
                                        currentLocationValue,
                                        description
                                    }),
                                    success:function(data){
                                          if(data){
                                                $('#msg').html(`<div class="alert alert-outline-success alert-dismissible fade show" role="alert"> ✅ ${data.message}</div>`);
                                                setTimeout(() => {
                                                $("#msg").fadeOut(800, function () {
                                                    $(this).remove(); // optional: removes it from DOM after fading
                                                });
                                                }, 5000);
                                                
                                               
                                          }else{
                                                 $('#msg').html(`<p class='alert alert-success'>error inserting record</p>`)
                                          }
                                    }
                             })
                        })
