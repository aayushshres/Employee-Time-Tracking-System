import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import PieChart from "../../../components/PieChart";
import StatBox from "../../../components/StatBox";
import Header from "../../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import ViewWorkLog from "../../employee/worklog/viewWorklog";
import { useNavigate } from "react-router-dom";

const EmployeeDetail = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const handleUpdateButtonClick = () => {
    // Handle the button click and navigate to the desired page
    // Replace "/path-to-update-page" with the actual path of your update page
    navigate("/admin/employeedetails/update");
  };
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Jon Snow" subtitle="Employee Details" />

        <Box>
          <Button
            onClick={handleUpdateButtonClick}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <EditIcon sx={{ mr: "10px" }} />
            Update
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* Projects */}
          <StatBox
            title="Ongoing Project"
            subtitle="React Native App"
            progress="0.75"
            icon={
              <StackedBarChartIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* Total Present Days */}
          <StatBox
            title="Total Present Days"
            subtitle="18"
            progress="0.90"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* Total Leave */}
          <StatBox
            title="Total Leave Days"
            subtitle="01"
            progress="0.05"
            icon={
              <PersonRemoveIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* Total Absent Days */}
          <StatBox
            title="Total Absent Days"
            subtitle="01"
            progress="0.05"
            icon={
              <PersonOffIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                Work Log
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <StackedBarChartIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <ViewWorkLog />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                Chart
              </Typography>
            </Box>
          </Box>
          <Box height="280px" m="-20px -30px 0 0">
            <PieChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EmployeeDetail;
