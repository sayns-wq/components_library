import { useState } from "react";
import classes from "./NumberPicker.module.css";

interface NumberPickerProps {
  config: {
    maxValue: number;
    colors: {
      max: string;
      normal: string;
    };
  };
}

function NumberPicker({ config }: NumberPickerProps) {
  const [outputValue, setOutputValue] = useState(0);
  const { maxValue, colors } = config;
  const percent = (outputValue * 100) / maxValue;
  return (
    <div className={classes.box}>
      <div className={classes.picker}>
        <span className={classes.output}>{outputValue}</span>
        <div className={classes.progress}>
          <span
            className={classes.meter}
            style={{
              height: `${percent}%`,
              backgroundColor:
                percent > 70 && colors.max ? colors.max : colors.normal,
              filter:
                percent > 70 && colors.max
                  ? `drop-shadow(0 0 2.5px ${colors.max}) drop-shadow(0 0 10px ${colors.max})`
                  : `drop-shadow(0 0 2.5px ${colors.normal}) drop-shadow(0 0 10px ${colors.normal})`,
            }}
          ></span>
        </div>
        <button
          className={`${classes.button} ${classes.plus}`}
          onClick={() =>
            outputValue < maxValue && setOutputValue(outputValue + 1)
          }
        >
          +
        </button>
        <button
          className={`${classes.button} ${classes.minus}`}
          onClick={() => outputValue > 0 && setOutputValue(outputValue - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default NumberPicker;
