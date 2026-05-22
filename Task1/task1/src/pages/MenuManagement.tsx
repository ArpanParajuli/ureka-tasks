import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Eye , Trash } from "lucide-react";

function MenuManagement()
{
    const AuthenticationStatus =
     {
        Approved : 1,
        Rejected : 2,
        Pending : 3
     } as const

     const AuthenticationLabel = 
     {
        1 : "Approved",
        2 : "Rejected",
        3 : "Pending"

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
            <TableRow className="bg-gray-100">

                <TableHead>S.No</TableHead>
                <TableHead>Full Name</TableHead>
                <TableHead>Login Name</TableHead>
                <TableHead>Is Employee</TableHead>
                <TableHead>Party Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>

            </TableRow>

             </TableHeader>

            <TableBody>
              {
                AuthenticationDetails.map((info) => (
                   <TableRow key={info.id}>

                     <TableCell>{info.id}</TableCell>
                     <TableCell>{info.fullName}</TableCell>

                     <TableCell>{info.loginName}</TableCell>

                     <TableCell>{info.isEmployee ? "Yes" : "No"}</TableCell>

                     <TableCell>{(info.partyName.length > 0) ? info.partyName : "-"}</TableCell>
                     <TableCell>{AuthenticationLabel[info.status]}</TableCell>

                     <TableCell className="flex items-center space-x-2">
                        <Eye size="18"/>
                        <Trash size="18"/>
                    </TableCell>

                   </TableRow>
                ))
              }
            </TableBody>
          
         </Table>
        </div>
    );
}


export default MenuManagement;