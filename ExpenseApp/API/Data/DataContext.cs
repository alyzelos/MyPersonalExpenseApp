using System;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Expenses> Expense { get; set; }
    public DbSet<Categories> Category { get; set; }
}
