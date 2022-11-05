import LineChart from "../../components/LineChart";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Pie = () => {
    return (
        <Box m="20px" >
            <Header title="Line Chart" subtitle="Simple Line Chart" />
            <Box height="50vh">
              <LineChart />
            </Box>

        </Box>

    )
}
export default Pie;