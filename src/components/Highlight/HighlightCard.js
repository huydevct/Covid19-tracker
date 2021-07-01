import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import CountUp from "react-countup";

const useStyle = makeStyles({
  wrapper: (props) => {
    if (props.type === "confirmed") return { borderLeft: "5px solid #c9302c" };
    if (props.type === "recovered") return { borderLeft: "5px solid #28a745" };
    else return { borderLeft: "5px solid gray" };
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
  count: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default function HighlightCard({ title, count, type }) {
  const styles = useStyle({ type });
  return (
    <Card className={styles.wrapper}>
      <CardContent>
        <Typography component="p" variant="body2" className={styles.title}>
          {title}
        </Typography>
        <Typography component="span" variant="body2" className={styles.count}>
          <CountUp end={count || 0} duration={1} separator=" " />
        </Typography>
      </CardContent>
    </Card>
  );
}
