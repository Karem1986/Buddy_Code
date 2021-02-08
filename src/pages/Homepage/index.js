import React from "react";
import UserReview from "../../components/UserReviews";
import { useHistory } from "react-router-dom";
import { Box, Grid, Button} from "@material-ui/core";
import { useStyles } from "./styles";

const premierFounders = [

  {
    name: "Marios",
    description: "Full stack developer",
    imageUrl:
      "https://avatars2.githubusercontent.com/u/50610396?s=460&u=1f7c3ef1e02913b6ada27e305ac0cfd926d48a63&v=4",
      testimonial:
      "Code mate is fantastic! you can buddy up with someone and learn about web development faster!",
  },
  {
    name: "Olena",
    description: "Front end developer",
    imageUrl:
      "https://avatars0.githubusercontent.com/u/7324142?s=460&u=def0ad84ddc36e8c631028faecfe5b6bfdded1cb&v=4",
      testimonial:
      "Code mate is what I need to pair up with someone that understands frontend development.",
  },

  {
    name: "Hannah",
    description: "Full stack developer",
    imageUrl:
      "https://avatars2.githubusercontent.com/u/54165871?s=460&u=cc54240dff97246e937161b37796991ddeeb3e03&v=4",
      testimonial:
      "I have met lots of awesome web developers thanks to Code Mate. It is f&$**^8 awesome!",
  
  },
];


export default function Homepage() {
   //Dynamic route for button to book session page
   const history = useHistory();
  const classes = useStyles();
   //button to book session
   const goBookingSession = () => {
    history.push(`/code_session`);
  };

  return (
    <Box mt={4} className={classes.root}>
      <Grid container spacing={3}>
    
        {premierFounders.map((founder) => {
          return (
            <Grid item xs={12} sm={4}>
              <UserReview
                key={Math.random()}
                name={founder.name}
                description={founder.description}
                imageUrl={founder.imageUrl}
                testimonial={founder.testimonial}
              />
            </Grid>
          );
        })}
<Grid container justify = "center">
<Button
            elevation={23}
            variant="contained"
            size="large"
            alignItems="center"
            justify="center"
            className={classes.button}
            onClick={goBookingSession}
          >
            Book a free session
          </Button>
          </Grid>
      </Grid>
    </Box>
  );
}