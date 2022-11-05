// // import { Typography, Box, useTheme } from "@mui/material";
// // import { tokens } from "../../theme";
// // import { DataGrid } from '@mui/x-data-grid';
// // import { mockDataTeam } from "../../data/mockData";
// // import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// // import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// // import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
// // import Header from "../../components/Header";




// // const Team = () => {
// //   const theme = useTheme();
// //   const colors = tokens(theme.palette.mode);
// //   const columns = [ 
// //     { field: 'id', headerName: 'ID'},
// //   {
// //     field: 'name',
// //     headerName: 'Name',
// //     flex:1,
// //     editable: true,
// //     cellClassName:"name-column--cell"
// //   },
// //   {
// //     field: 'age',
// //     headerName: 'Age',
// //     type:"number",
// //     headerAlign:"left",
// //     align:"left",

   
// //   },{
// //     field: 'phone',
// //     headerName: 'Phone No',
// //     flex:1,

   
// //   },{
// //     field: 'email',
// //     headerName: 'Email',
// //     flex:1,
  
   
// //   }
// //   ,{
// //     field: "accessLevel",
// //       headerName: "Access Level",
// //       flex: 1,
// //       renderCell: ({ row: { access } }) => {
// //         return (
// //           <Box
// //             width="60%"
// //             m="0 auto"
// //             p="5px"
// //             display="flex"
// //             justifyContent="center"
// //             backgroundColor={
// //               access === "admin"
// //                 ? colors.greenAccent[600]
// //                 : access === "manager"
// //                 ? colors.greenAccent[700]
// //                 : colors.greenAccent[700]
// //             }
// //             borderRadius="4px"
// //           >
// //             {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
// //             {access === "manager" && <SecurityOutlinedIcon />}
// //             {access === "user" && <LockOpenOutlinedIcon />}
// //             <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
// //               {access}
// //             </Typography>
// //           </Box>
// //         );
// //       },
    
    
   
// //   }
// //   ]
// //   return (
// //     <Box m="20px">
// //     <Header title="TEAM" subtitle="Managing the Team Members" />
// //     <Box
// //       m="40px 0 0 0"
// //       height="75vh"
// //       sx={{
// //         "& .MuiDataGrid-root": {
// //           border: "none",
// //         },
// //         "& .MuiDataGrid-cell": {
// //           borderBottom: "none",
// //         },
// //         "& .name-column--cell": {
// //           color: colors.greenAccent[300],
// //         },
// //         "& .MuiDataGrid-columnHeaders": {
// //           backgroundColor: colors.blueAccent[700],
// //           borderBottom: "none",
// //         },
// //         "& .MuiDataGrid-virtualScroller": {
// //           backgroundColor: colors.primary[400],
// //         },
// //         "& .MuiDataGrid-footerContainer": {
// //           borderTop: "none",
// //           backgroundColor: colors.blueAccent[700],
// //         },
// //         "& .MuiCheckbox-root": {
// //           color: `${colors.greenAccent[200]} !important`,
// //         },
// //       }}
// //     >
// //       <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
// //     </Box>
// //   </Box>
// //   );
// // };

// // export default Team;
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function BasicGrid() {
//   return (
//     <Box sx={{ flexGrow: 1 }} p={6}>
//       <Grid container spacing={2}>
//         <Box sx={{width:"100%" , height:"100%" , display:"flex" , 
//         justifyContent:"space-around", flexDirection:{xs:"column", sm:"row"} }} 
//         >
//         <Grid item xs={7}>
//           <Item>xs=8</Item>
//         </Grid>
//         <Grid item xs={4}>
//           <Item>xs=4</Item>
//         </Grid>
//         </Box>
      
        
//       </Grid>
//     </Box>
//   );
// }

