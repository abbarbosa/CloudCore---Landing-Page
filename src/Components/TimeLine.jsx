import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Paper, Typography } from '@mui/material';

const CustomizedTimeline = () => {
    return (
        <Timeline position="alternate"
            sx={{
                marginTop: '100px'
            }}
        >
            <TimelineItem
                sx={{
                    marginBottom: '16px',
                    paddingLeft: '420px'
                }}
            >
                <TimelineSeparator>
                    <TimelineDot
                        sx={{
                            height: '25px',
                            width: '25px',
                            background: '#243066'
                        }}
                    >
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3}
                        sx={{
                            padding: '6px 16px',
                            fontWeight: 'Semibold',
                            background: '#243066',
                            color: '#F9F9F9',
                            width: '420px',
                            height: '100px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Typography
                            sx={{
                                fontSize: '36px',
                                fontFamily: 'Poppins, sans-serif'
                            }}
                        >Descrição</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>

                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot
                        sx={{
                            height: '25px',
                            width: '25px',
                            background: 'transparent',
                            borderColor: '#243066'
                        }}
                    >
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3}
                        sx={{
                            padding: '6px 16px',
                            fontWeight: 'Semibold',
                            background: '#243066',
                            color: '#F9F9F9',
                            width: '420px',
                            height: '100px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Typography
                            sx={{
                                fontSize: '36px',
                                fontFamily: 'Poppins, sans-serif'
                            }}
                        >Requisitos</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>

                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot
                        sx={{
                            height: '25px',
                            width: '25px',
                            background: '#243066'
                        }}
                    >
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3}
                        sx={{
                            padding: '6px 16px',
                            width: '420px',
                            height: '100px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#243066'
                        }}>
                        <Typography
                            sx={{
                                fontSize: '36px',
                                textAlign: 'center',
                                lineHeight: '1',
                                fontFamily: 'Poppins, sans-serif'
                            }}
                        >Regras <br /> de negócio</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>

                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot
                        sx={{
                            height: '25px',
                            width: '25px',
                            background: 'transparent',
                            borderColor: '#243066'
                        }}
                    >
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3}
                        sx={{
                            padding: '6px 16px',
                            width: '420px',
                            height: '100px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#243066'
                        }}>
                        <Typography
                            sx={{
                                fontSize: '36px',
                                textAlign: 'center',
                                lineHeight: '1',
                                fontFamily: 'Poppins, sans-serif'
                            }}
                        >Restrições</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>

                </TimelineOppositeContent>
                <TimelineSeparator>

                    <TimelineDot
                        sx={{
                            height: '25px',
                            width: '25px',
                            background: '#243066'
                        }}
                    >
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: '6px 16px',
                            fontWeight: 'Semibold',
                            background: '#243066',
                            color: '#F9F9F9',
                            width: '420px',
                            height: '100px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Typography
                            sx={{
                                fontSize: '36px',
                                fontFamily: 'Poppins, sans-serif'
                            }}
                        >Diagramas</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>


            <TimelineItem>
                <TimelineOppositeContent>

                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot
                        sx={{
                            height: '25px',
                            width: '25px',
                            background: 'transparent',
                            borderColor: '#243066'
                        }}
                    >

                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3}
                        sx={{
                            padding: '6px 16px',
                            fontWeight: 'Semibold',
                            background: '#243066',
                            color: '#F9F9F9',
                            width: '420px',
                            height: '100px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Typography
                            sx={{
                                fontSize: '36px',
                                textAlign: 'center',
                                lineHeight: '1',
                                fontFamily: 'Poppins, sans-serif'
                            }}
                        >Protótipo <br /> de interface</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline >
    );
};

export default CustomizedTimeline;
