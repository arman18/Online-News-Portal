﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Server.Models
{
    public class LoginInfo
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public bool IsAdmin { get; set; }
    }
}
