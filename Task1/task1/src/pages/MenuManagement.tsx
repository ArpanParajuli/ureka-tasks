import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"



function MenuManagement()
{
    const AuthenticationStatus =
     {
        Approved : 1,
        Rejected : 2,
        Pending : 3
     } as const
     
    const AuthenticationDetails = 
    [
        {
            id : 1,
            fullName : "Ashish Manadhar",
            loginName : "anisha123",
            isEmployee : true,
            partyName : "",
            status : AuthenticationStatus.Approved,
        },

        {
            id : 2,
            fullName : "Sunaya Shrestha",
            loginName : "sunayanaa_121",
            isEmployee : false,
            partyName : "Global IME Bank",
            status : AuthenticationStatus.Rejected,
        },

    
    ]
    return (
        <div>
         <Table>
           <TableHeader>
            <TableRow>

                <TableHead>S.No</TableHead>
                <TableHead>Full Name</TableHead>
                <TableHead>Login Name</TableHead>
                <TableHead>Is Employee</TableHead>
                <TableHead>Party Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>

            </TableRow>

            <TableBody>
              {
                AuthenticationDetails.map((info) => (
                   <TableRow key={info.id}>
                     <TableCell>{info.id}</TableCell>
                     <TableCell>{info.fullName}</TableCell>
                     <TableCell>{info.loginName}</TableCell>
                     <TableCell>{info.isEmployee}</TableCell>
                     <TableCell>{info.partyName}</TableCell>
                     <TableCell>{info.status}</TableCell>
                   </TableRow>
                ))
              }
            </TableBody>
           </TableHeader>
         </Table>
        </div>
    );
}


export default MenuManagement;