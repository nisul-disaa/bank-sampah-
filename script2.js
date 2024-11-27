let users = [];
function addData() {
    const Nama = document.getElementById("namaLengkap").value;
    const usernam = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const alamat = document.getElementById("alamat").value;
    const sampah = document.getElementById("jenisSampah").value;
    
if(Nama && usernam && email && alamat && sampah){
    users.push({ Nama,  usernam, email, alamat, sampah});
    document.getElementById("namaLengkap").value = '';
    document.getElementById("username").value = '';
    document.getElementById("email").value = '';
    document.getElementById("alamat").value = '';
    document.getElementById("jenisSampah").value = '';
    alert("data disimpan");
    displayData();
}
else {
    alert("Harap isi semua data");
}
}  

function displayData() {
    const tableBody= document.getElementById("tableBody");
    tableBody.innerHTML = "";
    users.forEach((user, index)=> {
    tableBody.innerHTML += `
        <tr>
    <td>${index + 1}</td> 
    <td>${user.Nama}</td>
    <td>${user.usernam}</td>
    <td>${user.email}</td>
    <td>${user.alamat}</td>
    <td>${user.sampah}</td>
    <td>
    <button onclick="editData(${index})">Edit</button> 
    <button onclick="deleteData(${index})">Hapus</button>
    </td>
    </tr>
    `;
    });
   } 
   function editData(index) {
    const user = users[index];
    document.getElementById("namaLengkap").value = user.Nama;
    document.getElementById("username").value = user.Nama;
    document.getElementById("email").value = user.email;
    document.getElementById("alamat").value = user.alamat;
    document.getElementById("jenisSampah").value = user.sampah;

    deleteData(index)
 
}

function deleteData(index) {
    users.splice(index, 1); 
    displayData();
}