function Update_Database_Info_Table( json_resp )
{

}


function Initialize_Database_Info_Tables()
{

    const url = '/db?req=get_db_info';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true );
    xhr.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function(){
        if( xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200 )
        {
            // Grab the response and parse
            let json_resp = JSON.parse(xhr.responseText);

            Update_Database_Info_Table( json_resp )
        }
    };

    xhr.send(JSON.stringify(db_req));
}