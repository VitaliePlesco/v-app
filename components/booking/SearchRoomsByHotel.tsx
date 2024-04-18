"use client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import InputAdornment from "@mui/material/InputAdornment";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { addDays, format } from "date-fns";
import DateRangeCalendar from "./DateRangeCalendar";
import { useUrlParams } from "@/lib/hooks/useUrlParams";

import { useForm, Controller } from "react-hook-form";
import { ChangeEvent } from "react";

export default function SearchRoomsByHotel({ hotelId }: { hotelId: string }) {
  const pathname = usePathname();
  const { replace } = useRouter();

  const searchParams = useSearchParams();

  // Set default search state in URL
  if (
    !searchParams.get("hotel") &&
    !searchParams.get("checkin") &&
    !searchParams.get("checkout") &&
    !searchParams.get("guests")
  ) {
    const params = new URLSearchParams(searchParams);
    params.set("hotel", hotelId);
    params.set("checkin", format(new Date(), "y-MM-dd"));
    params.set("checkout", format(addDays(new Date(), 1), "y-MM-dd"));
    params.set("guests", "1 guest");
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const checkStart = searchParams.get("checkin");
  const checkEnd = searchParams.get("checkout");
  const start = checkStart ? new Date(checkStart) : undefined;
  const end = checkEnd ? new Date(checkEnd) : undefined;
  const selectedRangeDefault = [start, end];

  const numberOfGuests = searchParams.get("guests")?.toString() || "1 guest";

  const { control, watch } = useForm();

  // const dayPicker = watch("dayPicker");
  // // const [from, to] = dayPicker;
  // let checkin: Date | string = "Checkin";
  // let checkout: Date | string = "Checkout";
  // if (dayPicker && dayPicker[0]) {
  //   checkin = format(dayPicker[0], "dd MMM");
  // }
  // if (dayPicker && dayPicker[1]) {
  //   checkout = format(dayPicker[1], "dd MMM");
  // }

  const { hotel, checkin, checkout, guests } = useUrlParams();
  // console.log(hotel, guests, "par from hook");

  const handleDateRangeChange = (value: Date[]) => {
    const params = new URLSearchParams(searchParams);
    if (value[0]) {
      params.set("checkin", format(value[0], "y-MM-dd"));
    }
    if (value[1]) {
      params.set("checkout", format(value[1], "y-MM-dd"));
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const params = new URLSearchParams(searchParams);
    params.set("guests", e.target.value);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <div>
      <Paper
        variant="outlined"
        sx={{
          p: {
            xs: "0.75rem",
            md: "1.25rem",
          },
          bgcolor: "white",
          border: "1px solid #bdbdbd",
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-between",
            gap: "1rem",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box sx={{ width: "100%", bgcolor: "white" }}>
            <DateRangeCalendar
              control={control}
              checkin={checkin}
              checkout={checkout}
              onChangeDate={handleDateRangeChange}
            />
          </Box>
          <Controller
            control={control}
            name="guests"
            // defaultValue={guests}
            render={({ field: { onChange } }) => (
              <TextField
                select
                sx={{ bgcolor: "white" }}
                value={guests || "1 guest"}
                fullWidth
                onChange={(e) => {
                  handleChange(e);
                  onChange();
                }}
                SelectProps={{
                  MenuProps: { disableScrollLock: true, marginThreshold: null },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              >
                <MenuItem disableRipple value="1 guest" sx={{ pl: "2.9rem" }}>
                  1 guest
                </MenuItem>
                <MenuItem disableRipple value="2 guests" sx={{ pl: "2.9rem" }}>
                  2 guests
                </MenuItem>
              </TextField>
            )}
          />
        </Box>
      </Paper>
    </div>
  );
}