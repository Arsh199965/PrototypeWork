import React from 'react';
import { Box, Typography, Grid, Divider, LinearProgress, CircularProgress, Avatar } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

function Dashboard() {
    const progress = 85; // Example average performance score
    const exercises = [
        { name: 'Area1', points: 80 },
        { name: 'Area2', points: 64 },
        { name: 'Area3', points: 76 },
        { name: 'Area4', points: 100 },
        { name: 'Area5', points: 78 },
        { name: 'Area6', points: 90 }
    ];

    const trainingData = [
        { name: 'Su', hours: 2 },
        { name: 'Mo', hours: 4 },
        { name: 'Tu', hours: 6 },
        { name: 'We', hours: 8 },
        { name: 'Th', hours: 7 },
        { name: 'Fr', hours: 5 },
        { name: 'Sa', hours: 3 }
    ];

    const skillData = [
        { skill: 'Area1', value: 85 },
        { skill: 'Area2', value: 80 },
        { skill: 'Area3', value: 78 },
        { skill: 'Area4', value: 100 },
        { skill: 'Area5', value: 64 },
        { skill: 'Area6', value: 90 }
    ];

    const upcomingExams = [
        { course: 'Course 1', date: '22 Jan 2024', time: '12:00 PM' },
        { course: 'Course 2', date: '07 Apr 2024', time: '10:30 AM' },
        { course: 'Course 3', date: '18 May 2024', time: '01:00 PM' }
    ];

    const teachers = [
        { name: 'Teacher 1', expertise: 'Course 1 - Expert', avatar: '/path/to/avatar1.png' },
        { name: 'Teacher 2', expertise: 'Course 2 - Advanced', avatar: '/path/to/avatar2.png' },
        { name: 'Teacher 3', expertise: 'Course 3 - Beginner', avatar: '/path/to/avatar3.png' }
    ];

    return (
        <Box sx={{ padding: 3, backgroundColor: '#778899', minHeight: '100vh' }}>
            <Typography variant="h4" gutterBottom>Arsh Ki Mehnat</Typography>

            <Grid container spacing={3}>
                {/* Sidebar */}
                <Grid item xs={12} md={2}>
                    <Box sx={{ backgroundColor: '#2d3748', color: '#fff', borderRadius: 2, padding: 2, minHeight: '100vh' }}>
                        <Typography variant="h5" align="center">Progress Dashboard</Typography>
                        <Divider sx={{ my: 2, backgroundColor: '#fff' }} />
                        <Typography sx={{ padding: '10px 0' }}>Dashboard</Typography>
                        <Typography sx={{ padding: '10px 0' }}>Schedule</Typography>
                        <Typography sx={{ padding: '10px 0' }}>Profile</Typography>
                        <Typography sx={{ padding: '10px 0' }}>Messages</Typography>
                        <Typography sx={{ padding: '10px 0' }}>Settings</Typography>
                    </Box>
                </Grid>

                {/* Main Content */}
                <Grid item xs={12} md={10}>
                    <Grid container spacing={3}>
                        {/* Semester Plan */}
                        <Grid item xs={12} md={8}>
                            <Box sx={{ backgroundColor: '#fff', borderRadius: 2, padding: 3 }}>
                                <Typography variant="h6" sx={{ color: '#000', padding: '8px 0', zIndex: 1, fontSize: '30px', fontWeight: 'bold' }}>Semester Plan</Typography>
                                <Divider sx={{ my: 2 }} />
                                <Typography sx={{color: '#000'}}>Module 1 - Present Simple - 8 Lessons</Typography>
                                <LinearProgress variant="determinate" value={40} sx={{ my: 1 }} />
                                <Typography variant="body2" color="textSecondary">AreaX 30% | AreaY 30% | AreaZ 40%</Typography>
                                <Divider sx={{ my: 2 }} />
                                <Typography sx={{color: '#000'}}>Module 2 - Past Simple - 10 Lessons</Typography>
                                <LinearProgress variant="determinate" value={45} sx={{ my: 1 }} />
                                <Typography variant="body2" color="textSecondary">AreaX 45% | AreaY 20% | AreaZ 35%</Typography>
                            </Box>
                        </Grid>

                        {/* Average Performance */}
                        <Grid item xs={12} md={4}>
                            <Box sx={{ backgroundColor: '#fff', borderRadius: 2, padding: 3, textAlign: 'center' }}>
                                <Typography variant="h6" sx={{ color: '#000', padding: '8px 0', zIndex: 1, fontSize: '30px', fontWeight: 'bold' }}>Average Performance</Typography>
                                <CircularProgress variant="determinate" value={progress} size={100} thickness={5} />
                                <Typography variant="h4" sx={{ mt: 2, color: '#000', fontSize: '24px' }}>{progress} points</Typography>
                            </Box>
                        </Grid>

                        {/* Exercises */}
                        <Grid item xs={12} md={8}>
                            <Box sx={{ backgroundColor: '#fff', borderRadius: 2, padding: 3 }}>
                                <Typography variant="h6" sx={{ color: '#000', padding: '8px 0', zIndex: 1, fontSize: '30px', fontWeight: 'bold' }}>Exercises</Typography>
                                <Grid container spacing={1} sx={{ mt: 2 }}>
                                    {exercises.map((exercise, index) => (
                                        <Grid item xs={12} md={4} key={index}>
                                            <Box sx={{ padding: 1, border: '1px solid #e0e0e0', borderRadius: 2 }}>
                                                <Typography variant="body1" sx={{ color: '#000' }}>{exercise.name}</Typography>
                                                <Typography variant="h6" sx={{ color: exercise.points >= 75 ? 'green' : 'red' }}>
                                                    {exercise.points}/100
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Grid>

                        {/* Training Time */}
                        <Grid item xs={12} md={4}>
                            <Box sx={{ backgroundColor: '#fff', borderRadius: 2, padding: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography variant="h6" sx={{ color: '#000', padding: '2px 0', zIndex: 1, fontSize: '26px', fontWeight: 'bold' }}>Training Time</Typography>
                                

                                <LineChart width={300} height={200} data={trainingData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="hours" stroke="#8884d8" strokeWidth={2} />
                                </LineChart>
                            </Box>
                        </Grid>

                        {/* Developed Skills */}
                        <Grid item xs={12} md={6}>
                            <Box sx={{ backgroundColor: '#fff', borderRadius: 2, padding: 3 }}>
                                <Typography variant="h6" sx={{ color: '#000', padding: '8px 0', zIndex: 1, fontSize: '30px', fontWeight: 'bold' }}>Developed Skills</Typography>
                                <RadarChart outerRadius={90} width={300} height={300} data={skillData}>
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="skill" />
                                    <PolarRadiusAxis />
                                    <Radar name="Skills" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                    <Tooltip />
                                </RadarChart>
                            </Box>
                        </Grid>

                        {/* Upcoming Exams */}
                        <Grid item xs={12} md={3}>
                            <Box sx={{ backgroundColor: '#fff', borderRadius: 2, padding: 3 }}>
                                <Typography variant="h6" sx={{ color: '#000', padding: '8px 0', zIndex: 1, fontSize: '30px', fontWeight: 'bold' }}>Upcoming Exams</Typography>
                                <Divider sx={{ my: 2 }} />
                                {upcomingExams.map((exam, index) => (
                                    <Box key={index} sx={{ marginBottom: 2 }}>
                                        <Typography variant="subtitle1" sx= {{color: "#000"}}>{exam.course}</Typography>
                                        <Typography variant="body2" color="textSecondary">{exam.date}</Typography>
                                        <Typography variant="body2" color="textSecondary">{exam.time}</Typography>
                                        <Divider sx={{ my: 1 }} />
                                    </Box>
                                ))}
                            </Box>
                        </Grid>

                        {/* Linked Teachers */}
                        <Grid item xs={12} md={3}>
                            <Box sx={{ backgroundColor: '#fff', borderRadius: 2, padding: 3 }}>
                                <Typography variant="h6" sx={{ color: '#000', padding: '8px 0', zIndex: 1, fontSize: '30px', fontWeight: 'bold' }}>Linked Teachers</Typography>
                                <Divider sx={{ my: 2 }} />
                                {teachers.map((teacher, index) => (
                                    <Box key={index} sx={{ marginBottom: 2, display: 'flex', alignItems: 'center' }}>
                                        <Avatar src={teacher.avatar} alt={teacher.name} sx={{ marginRight: 2 }} />
                                        <Box>
                                            <Typography variant="subtitle1" sx={{color:"#000"}}>{teacher.name}</Typography>
                                            <Typography variant="body2" color="textSecondary">{teacher.expertise}</Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Dashboard;
