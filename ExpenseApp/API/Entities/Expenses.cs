using System;

namespace API.Entities;

public class Expenses
{
    public int Id { get; set; } 
    public required decimal Amount { get; set; }
    public required string ExpenseName { get; set; }
    public DateOnly Date { get; set; }
    public string? Details { get; set; }

}
