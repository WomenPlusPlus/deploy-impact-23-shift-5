# Generated by Django 4.2.5 on 2023-10-28 15:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="company",
            fields=[
                ("company_id", models.IntegerField(primary_key=True, serialize=False)),
                ("comp_name", models.CharField(default=" ", max_length=50)),
                ("comp_sector", models.CharField(default=" ", max_length=50)),
                ("comp_desc", models.TextField(default=" ")),
                ("comp_values", models.TextField(default=" ")),
                ("comp_street", models.CharField(default=" ", max_length=50)),
                ("city", models.CharField(default=" ", max_length=50)),
                ("postal_code", models.CharField(default=" ", max_length=10)),
                ("country", models.CharField(default=" ", max_length=50)),
                ("comp_linkedin", models.CharField(default=" ", max_length=100)),
                ("comp_instagram", models.CharField(default=" ", max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name="company_stats",
            fields=[
                ("stats_id", models.IntegerField(primary_key=True, serialize=False)),
                ("active_jobs", models.IntegerField(default=0)),
                ("app_received", models.IntegerField(default=0)),
                ("candidates_match", models.IntegerField(default=0)),
                (
                    "company_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="entryhub_company.company",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="company_contact",
            fields=[
                (
                    "comp_contactid",
                    models.IntegerField(primary_key=True, serialize=False),
                ),
                ("contact_name", models.CharField(default=" ", max_length=50)),
                ("contact_role", models.CharField(default=" ", max_length=100)),
                ("contact_emailid", models.CharField(default=" ", max_length=100)),
                (
                    "company_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="entryhub_company.company",
                    ),
                ),
            ],
        ),
    ]
